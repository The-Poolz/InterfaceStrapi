import { useCacheWithUpdatedAt } from "../useCacheWithUpdatedAt"
import * as types from "../__generated__/graphql"
import { graphql } from "../__generated__"

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
