import { useQuery, AClient } from "../index"
import { graphql } from "../__generated__"

export const GET_HEADER = graphql(`
  query Header {
    header {
      HeaderList {
        id
        text
        url
        ctaText
        textColor
      }
    }
  }
`)

export const useHeader = () => useQuery(GET_HEADER, { client: AClient, fetchPolicy: "cache-first" })
