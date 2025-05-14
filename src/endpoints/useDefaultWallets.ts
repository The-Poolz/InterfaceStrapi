import { useQuery, useApolloClient } from "../index"
import { graphql } from "../__generated__"

const GET_DEFAULT_WALLETS = graphql(`
  query DefaultWallets {
    defaultWallets(sort: "order") {
      Name
      Link
      Icon {
        url
      }
    }
  }
`)

export const useDefaultWallets = () => {
  const AClient = useApolloClient()
  return useQuery(GET_DEFAULT_WALLETS, { client: AClient })
}
