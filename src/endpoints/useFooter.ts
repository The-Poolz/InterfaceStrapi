import { useQuery } from "../index"
import { useCacheWithUpdatedAt } from "../useCacheWithUpdatedAt"
import { graphql } from "../__generated__"
import * as types from "../__generated__/graphql"
import { useGetClient } from "../globalState/Context"

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

export const useFooter = () => {
  const client = useGetClient()
  return useQuery(GET_FOOTER, { client })
}

export const useFooter_persist = () =>
  useCacheWithUpdatedAt<NonNullable<types.FooterQuery>, NonNullable<types.FooterUpdatedQuery>>({
    fullQuery: GET_FOOTER,
    updatedAtQuery: GET_FOOTER_UPDATED,
    getUpdatedAt: (data) => data.footer?.updatedAt ?? ""
  })
