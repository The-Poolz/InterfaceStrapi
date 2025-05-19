import { useCacheWithUpdatedAt } from "../useCacheWithUpdatedAt"
import * as types from "../__generated__/graphql"
import { graphql } from "../__generated__"

const GET_CHAINS_OF_PROJECTS = graphql(`
  query Chain_setting {
    chainSettings(filters: { projects_informations: { IsShow: { eq: true } } }) {
      DisplayText
      chain {
        chainId
        name
      }
      updatedAt
    }
  }
`)

const GET_CHAINS_OF_PROJECTS_UPDATED = graphql(`
  query Chain_settingUpdated {
    chainSettings(filters: { projects_informations: { IsShow: { eq: true } } }) {
      updatedAt
    }
  }
`)
export const useChainSetting = () =>
  useCacheWithUpdatedAt<NonNullable<types.Chain_SettingQuery>, NonNullable<types.Chain_SettingUpdatedQuery>>({
    fullQuery: GET_CHAINS_OF_PROJECTS,
    updatedAtQuery: GET_CHAINS_OF_PROJECTS_UPDATED,
    getUpdatedAt: (data) => {
      return data.chainSettings?.map((c) => c?.updatedAt ?? "").join(",") ?? ""
    }
  })
