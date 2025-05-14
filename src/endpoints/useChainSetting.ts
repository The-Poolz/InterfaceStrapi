import { useQuery, useApolloClient } from "../index"
import { graphql } from "../__generated__"

const GET_CHAINS_OF_PROJECTS = graphql(`
  query Chain_setting {
    chainSettings(filters: { projects_informations: { IsShow: { eq: true } } }) {
      DisplayText
      chain {
        chainId
        name
      }
    }
  }
`)

export const useChainSetting = () => {
  const AClient = useApolloClient()
  return useQuery(GET_CHAINS_OF_PROJECTS, {
    client: AClient
  })
}
