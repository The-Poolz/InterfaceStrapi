import { useQuery, AClient } from "../index"
import { graphql } from "../__generated__"

const GET_LOCK_TOKEN_WHITELISTS = graphql(`
  query LockTokenWhitelists($chainId: Long!, $typesIn: [String!]) {
    lockTokenWhitelists(
      pagination: { limit: 1000 }
      filters: { chain_settings: { chain: { chainId: { eq: $chainId } } }, Type: { in: $typesIn } }
    ) {
      Address
      Type
    }
  }
`)

export const useLockTokenWhitelists = (chainId: number, types: string[]) =>
  useQuery(GET_LOCK_TOKEN_WHITELISTS, { client: AClient, fetchPolicy: "cache-first", variables: { chainId, typesIn: types } })
