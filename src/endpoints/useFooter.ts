import { useCacheWithUpdatedAt } from "../useCacheWithUpdatedAt"
import { graphql } from "../__generated__"
import * as types from "../__generated__/graphql"

const GET_FOOTER = graphql(`
  query Footer {
    footer {
      Company {
        id
        name
        url
        newWindow
      }
      Help {
        id
        name
        url
        newWindow
      }
      Information {
        id
        name
        url
        newWindow
      }
      Social {
        id
        name
        url
        newWindow
      }
      Boost_Social {
        id
        name
        url
        newWindow
      }
      updatedAt
    }
  }
`)

const GET_FOOTER_UPDATED = graphql(`
  query FooterUpdated {
    footer {
      updatedAt
    }
  }
`)

export const useFooter = () =>
  useCacheWithUpdatedAt<NonNullable<types.FooterQuery>, NonNullable<types.FooterUpdatedQuery>>({
    fullQuery: GET_FOOTER,
    updatedAtQuery: GET_FOOTER_UPDATED,
    getUpdatedAt: (data) => data.footer?.updatedAt ?? ""
  })
