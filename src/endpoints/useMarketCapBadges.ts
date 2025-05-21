import { useCacheWithUpdatedAt } from "../useCacheWithUpdatedAt"
import * as types from "../__generated__/graphql"
import { graphql } from "../__generated__"

const GET_MARKET_CAP_BADGES = graphql(`
  query MarketCapBadges {
    marketCapBadges(sort: ["documentId:asc"]) {
      documentId
      Link
      updatedAt
      icon {
        url
      }
    }
  }
`)
const GET_MARKET_CAP_BADGES_UPDATED = graphql(`
  query MarketCapBadgesUpdated {
    marketCapBadges(sort: ["documentId:asc"]) {
      updatedAt
    }
  }
`)

export const useMarketCapBadges = () =>
  useCacheWithUpdatedAt<NonNullable<types.MarketCapBadgesQuery>, NonNullable<types.MarketCapBadgesUpdatedQuery>>({
    fullQuery: GET_MARKET_CAP_BADGES,
    updatedAtQuery: GET_MARKET_CAP_BADGES_UPDATED,
    getUpdatedAt: (data) => {
      return data.marketCapBadges?.map((c) => c?.updatedAt ?? "").join(",") ?? ""
    }
  })
