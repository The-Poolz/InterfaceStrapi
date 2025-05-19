import { useCacheWithUpdatedAt } from "../useCacheWithUpdatedAt"
import { graphql } from "../__generated__"
import * as types from "../__generated__/graphql"

const GET_HEADER = graphql(`
  query Header {
    header {
      HeaderList {
        id
        text
        url
        ctaText
        textColor
      }
      updatedAt
    }
  }
`)

const GET_HEADER_UPDATED = graphql(`
  query HeaderUpdated {
    header {
      updatedAt
    }
  }
`)
export const useHeader = () =>
  useCacheWithUpdatedAt<NonNullable<types.HeaderQuery>, NonNullable<types.HeaderUpdatedQuery>>({
    fullQuery: GET_HEADER,
    updatedAtQuery: GET_HEADER_UPDATED,
    getUpdatedAt: (data) => data.header?.updatedAt ?? ""
  })
