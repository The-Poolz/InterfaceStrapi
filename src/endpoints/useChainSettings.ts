import { useCacheWithUpdatedAt } from "../useCacheWithUpdatedAt"
import * as types from "../__generated__/graphql"
import { graphql } from "../__generated__"
import { QueryHookOptions, useQuery } from "@apollo/client"
import { useGetClient } from "globalState/Context"

const GET_CHAIN_SETTINGS = graphql(`
  query ChainSettings {
    chainSettings(filters: { Show: { eq: true } }, pagination: { limit: 100 }, sort: ["documentId:asc"]) {
      documentId
      IsEVM
      DisplayText
      Show
      ShowInBoutique
      updatedAt
      WhiteLogo {
        url
      }
      colorIcon {
        Color
        icon {
          url
        }
      }
      chain {
        chainId
        name
        isTest
      }
    }
  }
`)

const GET_CHAIN_SETTINGS_V2 = graphql(`
  query Chain($pagination: PaginationArg, $filters: ChainSettingFiltersInput) {
    chainSettings(pagination: $pagination, filters: $filters) {
      DisplayText
      chain {
        chainId
        symbol
        name
        isTest
        contracts_on_chain {
          RPC
          Decimals
          Explorer
        }
      }
      colorIcon {
        Color
        icon {
          url
        }
      }
    }
  }
`)
const GET_CHAIN_SETTINGS_UPDATED = graphql(`
  query ChainSettingsUpdated {
    chainSettings(filters: { Show: { eq: true } }, pagination: { limit: 100 }, sort: ["documentId:asc"]) {
      updatedAt
    }
  }
`)

export const useChainSettings = () =>
  useCacheWithUpdatedAt<NonNullable<types.ChainSettingsQuery>, NonNullable<types.ChainSettingsUpdatedQuery>>({
    fullQuery: GET_CHAIN_SETTINGS,
    updatedAtQuery: GET_CHAIN_SETTINGS_UPDATED,
    getUpdatedAt: (data) => {
      return data.chainSettings?.map((c) => c?.updatedAt ?? "").join(",") ?? ""
    }
  })

export const useChainSettingsV2 = (options?: QueryHookOptions<types.ChainQuery, types.ChainQueryVariables>) => {
  const client = useGetClient()

  return useQuery<types.ChainQuery, types.ChainQueryVariables>(GET_CHAIN_SETTINGS_V2, {
    ...options,
    client,
    skip: options?.skip ?? !options?.variables
  })
}
