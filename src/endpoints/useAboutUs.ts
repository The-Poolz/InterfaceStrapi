import { useCacheWithUpdatedAt } from "../useCacheWithUpdatedAt"
import { graphql } from "../__generated__"
import * as types from "../__generated__/graphql"

const GET_ABOUT_US = graphql(`
  query AboutUs {
    aboutUs {
      Title
      smallText
      BOT_CTA_Text
      updatedAt
      htmlColorText {
        text
        id
        color
      }
      iconText {
        text
        smallText
        icon {
          url
        }
        id
      }
      MainCTA {
        id
        text
        url
        backColor
        TextColor
      }
      sliders {
        name
        url
        documentId
      }
      TopBg {
        url
      }
    }
  }
`)

const GET_ABOUT_US_UPDATED = graphql(`
  query AboutUsUpdated {
    aboutUs {
      updatedAt
    }
  }
`)

export const useAboutUs = () =>
  useCacheWithUpdatedAt<NonNullable<types.AboutUsQuery>, NonNullable<types.AboutUsUpdatedQuery>>({
    fullQuery: GET_ABOUT_US,
    updatedAtQuery: GET_ABOUT_US_UPDATED,
    getUpdatedAt: (data) => data.aboutUs?.updatedAt ?? ""
  })
