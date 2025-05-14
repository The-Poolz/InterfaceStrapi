import { useQuery, useApolloClient } from "../index"
import { graphql } from "../__generated__"

const GET_VAULT_FAGS = graphql(`
  query VaultFaqs {
    vaultFaqs {
      ShortText
      LongText
    }
  }
`)

export const useVaultFaqs = () => {
  const AClient = useApolloClient()
  return useQuery(GET_VAULT_FAGS, { client: AClient })
}
