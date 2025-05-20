import { useCacheWithUpdatedAt } from "../useCacheWithUpdatedAt"
import * as types from "../__generated__/graphql"
import { graphql } from "../__generated__"

const GET_BUY_POOLZS = graphql(`
  query BuyPoolzs {
    buyPoolzs(sort: ["Order"]) {
      documentId
      Name
      URL
      updatedAt
      Icon {
        url
      }
    }
  }
`)
const GET_BUY_POOLZS_UPDATED = graphql(`
  query BuyPoolzsUpdated {
    buyPoolzs(sort: ["Order"]) {
      updatedAt
    }
  }
`)

export const useBuyPoolzs = () =>
  useCacheWithUpdatedAt<NonNullable<types.BuyPoolzsQuery>, NonNullable<types.BuyPoolzsUpdatedQuery>>({
    fullQuery: GET_BUY_POOLZS,
    updatedAtQuery: GET_BUY_POOLZS_UPDATED,
    getUpdatedAt: (data) => {
      return data.buyPoolzs?.map((c) => c?.updatedAt ?? "").join(",") ?? ""
    }
  })
