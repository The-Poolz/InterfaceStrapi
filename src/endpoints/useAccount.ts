import { useQuery, AClient } from "../index"
import { graphql } from "../__generated__"

const GET_ACCOUNT = graphql(`
  query Account {
    account {
      Title
      smallText
    }
    nonEvmChains {
      DisplayText
      Regex
      Icon {
        url
      }
    }
  }
`)

export const useAccount = () => useQuery(GET_ACCOUNT, { client: AClient, fetchPolicy: "cache-first" })
