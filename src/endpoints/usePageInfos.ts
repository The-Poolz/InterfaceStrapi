import { useQuery } from "../index"
import { graphql } from "../__generated__"
import { useGetClient } from "../globalState/Context"

const GET_PAGE_INFOS = graphql(`
  query PageInfos {
    pageInfos {
      Link
      Title
      Description
    }
  }
`)

export const usePageInfos = () => {
  const AClient = useGetClient()
  return useQuery(GET_PAGE_INFOS, { client: AClient })
}
