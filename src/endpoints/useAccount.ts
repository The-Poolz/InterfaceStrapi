import { useQuery, useApolloClient } from "../index"
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

export const useAccount = () => {
  const AClient = useApolloClient()
  return useQuery(GET_ACCOUNT, { client: AClient })
}
