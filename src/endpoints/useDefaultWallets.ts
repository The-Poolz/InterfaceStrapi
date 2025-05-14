import { useQuery } from "../index"
import { graphql } from "../__generated__"
import { useGetClient } from "../globalState/Context"

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
  const AClient = useGetClient()
  return useQuery(GET_DEFAULT_WALLETS, { client: AClient })
}
