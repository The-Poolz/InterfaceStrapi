import { useCacheWithUpdatedAt } from "../useCacheWithUpdatedAt"
import * as types from "../__generated__/graphql"
import { graphql } from "../__generated__"

const GET_VAULT_FAGS = graphql(`
  query VaultFaqs {
    vaultFaqs {
      ShortText
      LongText
      updatedAt
    }
  }
`)
const GET_VAULT_FAGS_UPDATED = graphql(`
  query VaultFaqsUpdated {
    vaultFaqs {
      updatedAt
    }
  }
`)

export const useVaultFaqs = () =>
  useCacheWithUpdatedAt<NonNullable<types.VaultFaqsQuery>, NonNullable<types.VaultFaqsUpdatedQuery>>({
    fullQuery: GET_VAULT_FAGS,
    updatedAtQuery: GET_VAULT_FAGS_UPDATED,
    getUpdatedAt: (data) => {
      return data.vaultFaqs?.map((c) => c?.updatedAt ?? "").join(",") ?? ""
    }
  })
