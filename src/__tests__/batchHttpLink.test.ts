// src/__tests__/batchHttpLink.test.ts

import { ApolloClient, InMemoryCache, gql } from "@apollo/client"
import { BatchHttpLink }                  from "@apollo/client/link/batch-http"
import { print }                          from "graphql"
import { BATCH_DELAY_MS }                 from "../globalState/Context"

jest.useFakeTimers()

describe("BatchHttpLink integration", () => {
  let mockFetch: jest.Mock
  let client: ApolloClient<any>

  beforeEach(() => {
    // mockFetch now returns a minimal Response‐like object
    const batchResult = [
      { data: { a: "A" } },
      { data: { b: "B" } },
    ]
    mockFetch = jest.fn().mockResolvedValue({
      ok:     true,
      status: 200,
      // Apollo first calls `response.text()`
      text:   () => Promise.resolve(JSON.stringify(batchResult)),
      // then it might call `response.json()`
      json:   () => Promise.resolve(batchResult),
      // and it reads headers.get()
      headers: {
        get: (_: string) => null
      }
    })

    client = new ApolloClient({
      link: new BatchHttpLink({
        uri:           "https://test/graphql",
        batchMax:      10,
        batchInterval: BATCH_DELAY_MS,
        fetch:         mockFetch,    // inject our mock
      }),
      cache: new InMemoryCache(),
    })
  })

  it("batches two queries into a single network request", async () => {
    const QUERY_A = gql`query TestA { a }`
    const QUERY_B = gql`query TestB { b }`

    // fire them both without awaiting
    const pA = client.query({ query: QUERY_A })
    const pB = client.query({ query: QUERY_B })

    // flush the batch timer
    jest.advanceTimersByTime(BATCH_DELAY_MS)

    // wait for both queries to resolve
    const [resA, resB] = await Promise.all([pA, pB])

    // 1) Exactly one fetch call
    expect(mockFetch).toHaveBeenCalledTimes(1)

    // 2) Inspect the batched request payload
    const [url, options] = mockFetch.mock.calls[0]
    expect(url).toBe("https://test/graphql")

    const body = JSON.parse(options.body as string)
    expect(Array.isArray(body)).toBe(true)
    expect(body).toHaveLength(2)

    expect(body[0]).toMatchObject({
      operationName: "TestA",
      query:         print(QUERY_A),
      variables:     {},
    })
    expect(body[1]).toMatchObject({
      operationName: "TestB",
      query:         print(QUERY_B),
      variables:     {},
    })

    // 3) And the client sees the correct data
    expect(resA.data).toEqual({ a: "A" })
    expect(resB.data).toEqual({ b: "B" })
  })
})
