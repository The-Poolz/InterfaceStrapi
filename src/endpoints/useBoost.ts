import { useCacheWithUpdatedAt } from "../useCacheWithUpdatedAt"
import { graphql } from "../__generated__"
import * as types from "../__generated__/graphql"

const GET_BOOST = graphql(`
  query Boost {
    boost {
      Title
      smallText
      BOT_CTA_Text
      TopBgUrl
      updatedAt
      MainCTA {
        id
        text
        backColor
        TextColor
        hoverBackColor
        url
      }
      iconText {
        id
        text
        smallText
        icon {
          url
        }
      }
    }
  }
`)

const GET_BOOST_UPDATED = graphql(`
  query BoostUpdated {
    boost {
      updatedAt
    }
  }
`)

export const useBoost = () =>
  useCacheWithUpdatedAt<NonNullable<types.BoostQuery>, NonNullable<types.BoostUpdatedQuery>>({
    fullQuery: GET_BOOST,
    updatedAtQuery: GET_BOOST_UPDATED,
    getUpdatedAt: (data) => data.boost?.updatedAt ?? ""
  })
