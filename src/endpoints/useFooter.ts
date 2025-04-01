import { useQuery, AClient } from "../index"
import { graphql } from "../__generated__"

export const GET_FOOTER = graphql(`
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
    }
  }
`)

export const useFooter = () => useQuery(GET_FOOTER, { client: AClient, fetchPolicy: "cache-first" })
