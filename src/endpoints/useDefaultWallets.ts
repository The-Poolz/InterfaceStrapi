import { useQuery, AClient } from "../index"
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

export const useDefaultWallets = () => useQuery(GET_DEFAULT_WALLETS, { client: AClient, fetchPolicy: "cache-first" })
