import { useLazyQuery } from "../index"
import { useGetClient } from "../globalState/Context"
import { useCacheWithUpdatedAt } from "../useCacheWithUpdatedAt"
import { graphql } from "../__generated__"
import * as types from "../__generated__/graphql"

const GET_BUY_WITHS = graphql(`
  query BuyWiths($filters: BuyWithFiltersInput, $pagination: PaginationArg, $sort: [String]) {
    buyWiths(filters: $filters, sort: $sort, pagination: $pagination) {
      documentId
      Name
      updatedAt
      SourcePoolId
      ChainAddresses {
        Address
        chain_setting {
          chain {
            chainId
          }
        }
      }
    }
  }
`)
const GET_BUY_WITHS_UPDATED = graphql(`
  query BuyWithsUpdated($filters: BuyWithFiltersInput, $pagination: PaginationArg, $sort: [String]) {
    buyWiths(filters: $filters, sort: $sort, pagination: $pagination) {
      updatedAt
    }
  }
`)

export const useBuyWiths = () =>
  useCacheWithUpdatedAt<NonNullable<types.BuyWithsQuery>, NonNullable<types.BuyWithsUpdatedQuery>>({
    fullQuery: GET_BUY_WITHS,
    updatedAtQuery: GET_BUY_WITHS_UPDATED,
    getUpdatedAt: (data) => data.buyWiths?.map((c) => c?.updatedAt ?? "").join(",") ?? ""
  })

export const useLazyBuyWiths = () => {
  const client = useGetClient()
  return useLazyQuery(GET_BUY_WITHS, {
    client
  })
}
