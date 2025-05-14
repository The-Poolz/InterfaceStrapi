import { useQuery } from "../index"
import { graphql } from "../__generated__"
import { useGetClient } from "../globalState/Context"

const GET_VAULT_FAGS = graphql(`
  query VaultFaqs {
    vaultFaqs {
      ShortText
      LongText
    }
  }
`)

export const useVaultFaqs = () => {
  const AClient = useGetClient()
  return useQuery(GET_VAULT_FAGS, { client: AClient })
}
