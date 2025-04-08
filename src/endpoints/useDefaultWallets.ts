import { useQuery, AClient } from "../index"
import { graphql } from "../__generated__"

const GET_DEFAULT_WALLETS = graphql(`
  query DefaultWallets {
    defaultWallets {
      Name
      Link
      order
      Icon {
        url
      }
    }
  }
`)

export const useAccount = () => useQuery(GET_DEFAULT_WALLETS, { client: AClient, fetchPolicy: "cache-first" })
