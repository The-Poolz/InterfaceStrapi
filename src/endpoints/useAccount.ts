import { useQuery } from "../index"
import { graphql } from "../__generated__"
import { useGetClient } from "../globalState/Context"

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
  const AClient = useGetClient()
  return useQuery(GET_ACCOUNT, { client: AClient })
}
