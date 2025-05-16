import { useCacheWithUpdatedAt } from "../useCacheWithUpdatedAt"
import { graphql } from "../__generated__"
import * as types from "../__generated__/graphql"

const GET_ACCOUNT = graphql(`
  query Account {
    account {
      Title
      smallText
      updatedAt
    }
    nonEvmChains {
      DisplayText
      Regex
      Icon {
        url
      }
      updatedAt
    }
  }
`)

const GET_ACCOUNT_UPDATED = graphql(`
  query AccountUpdated {
    account {
      updatedAt
    }
    nonEvmChains {
      updatedAt
    }
  }
`)

export const useAccount = () =>
  useCacheWithUpdatedAt<NonNullable<types.AccountQuery>, NonNullable<types.AccountUpdatedQuery>>({
    fullQuery: GET_ACCOUNT,
    updatedAtQuery: GET_ACCOUNT_UPDATED,
    getUpdatedAt: (data) => {
      const accountUpdated = data.account?.updatedAt ?? ""
      const chainsUpdated = data.nonEvmChains?.map((c) => c?.updatedAt ?? "").join(",") ?? ""

      return `${accountUpdated}|${chainsUpdated}`
    }
  })
