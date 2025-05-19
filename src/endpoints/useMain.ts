import { useCacheWithUpdatedAt } from "../useCacheWithUpdatedAt"
import * as types from "../__generated__/graphql"
import { graphql } from "../__generated__"

const GET_MAIN = graphql(`
  query Main {
    main {
      sections {
        Title
        smallText
        TopBgUrl
        secondCta {
          text
          url
          ctaText
          addText
          flag
          backColor
          TextColor
          hoverBackColor
          id
        }
        secondTitle
        SecondSmallText
        MainCTA {
          id
          text
          url
          ctaText
          addText
          flag
          backColor
          TextColor
          hoverBackColor
        }
        TopBg {
          url
        }
        htmlColorText {
          text
          url
          id
        }
      }
      updatedAt
    }
  }
`)
const GET_MAIN_UPDATED = graphql(`
  query MainUpdated {
    main {
      updatedAt
    }
  }
`)

export const useMain = () =>
  useCacheWithUpdatedAt<NonNullable<types.MainQuery>, NonNullable<types.MainUpdatedQuery>>({
    fullQuery: GET_MAIN,
    updatedAtQuery: GET_MAIN_UPDATED,
    getUpdatedAt: (data) => data.main?.updatedAt ?? ""
  })
