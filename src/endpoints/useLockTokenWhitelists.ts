import { graphql } from "../__generated__"
import { useCacheWithUpdatedAt } from "../useCacheWithUpdatedAt"
import * as types from "../__generated__/graphql"

const GET_LOCK_TOKEN_WHITELISTS = graphql(`
  query LockTokenWhitelists($chainId: Long!, $typesIn: [String!]) {
    lockTokenWhitelists(
      pagination: { limit: 1000 }
      filters: { chain_settings: { chain: { chainId: { eq: $chainId } } }, Type: { in: $typesIn } }
    ) {
      Address
      Type
      updatedAt
    }
  }
`)
const GET_LOCK_TOKEN_WHITELISTS_UPDATED = graphql(`
  query LockTokenWhitelistsUpdated($chainId: Long!, $typesIn: [String!]) {
    lockTokenWhitelists(
      pagination: { limit: 1000 }
      filters: { chain_settings: { chain: { chainId: { eq: $chainId } } }, Type: { in: $typesIn } }
    ) {
      updatedAt
    }
  }
`)

export const useLockTokenWhitelists = (chainId: number, typesIn: string[]) =>
  useCacheWithUpdatedAt<
    NonNullable<types.LockTokenWhitelistsQuery>,
    NonNullable<types.LockTokenWhitelistsUpdatedQuery>,
    types.LockTokenWhitelistsQueryVariables
  >({
    fullQuery: GET_LOCK_TOKEN_WHITELISTS,
    updatedAtQuery: GET_LOCK_TOKEN_WHITELISTS_UPDATED,
    getUpdatedAt: (data) => data.lockTokenWhitelists?.map((c) => c?.updatedAt ?? "").join(",") ?? "",
    variables: { chainId, typesIn }
  })
