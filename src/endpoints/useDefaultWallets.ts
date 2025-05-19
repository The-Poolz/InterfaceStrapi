import { useCacheWithUpdatedAt } from "../useCacheWithUpdatedAt"
import * as types from "../__generated__/graphql"
import { graphql } from "../__generated__"

const GET_DEFAULT_WALLETS = graphql(`
  query DefaultWallets {
    defaultWallets(sort: "order") {
      Name
      Link
      Icon {
        url
      }
      updatedAt
    }
  }
`)

const GET_DEFAULT_WALLETS_UPDATED = graphql(`
  query DefaultWalletsUpdated {
    defaultWallets(sort: "order") {
      updatedAt
    }
  }
`)
export const useDefaultWallets = () =>
  useCacheWithUpdatedAt<NonNullable<types.DefaultWalletsQuery>, NonNullable<types.DefaultWalletsUpdatedQuery>>({
    fullQuery: GET_DEFAULT_WALLETS,
    updatedAtQuery: GET_DEFAULT_WALLETS_UPDATED,
    getUpdatedAt: (data) => {
      return data.defaultWallets?.map((c) => c?.updatedAt ?? "").join(",") ?? ""
    }
  })
