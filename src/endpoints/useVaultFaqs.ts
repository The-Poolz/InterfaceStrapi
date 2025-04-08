import { useQuery, AClient } from "../index"
import { graphql } from "../__generated__"

const GET_VAULT_FAGS = graphql(`
  query VaultFaqs {
    vaultFaqs {
      ShortText
      LongText
    }
  }
`)

export const useVaultFaqs = () => useQuery(GET_VAULT_FAGS, { client: AClient, fetchPolicy: "cache-first" })
