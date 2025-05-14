import { useQuery } from "../index"
import { graphql } from "../__generated__"
import { useGetClient } from "../globalState/Context"

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
  const AClient = useGetClient()
  return useQuery(GET_CHAINS_OF_PROJECTS, {
    client: AClient
  })
}
