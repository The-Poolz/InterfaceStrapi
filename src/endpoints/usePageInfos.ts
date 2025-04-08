import { useQuery, AClient } from "../index"
import { graphql } from "../__generated__"

const GET_PAGE_INFOS = graphql(`
  query PageInfos {
    pageInfos {
      Link
      Title
      Description
    }
  }
`)

export const usePageInfos = () => useQuery(GET_PAGE_INFOS, { client: AClient, fetchPolicy: "cache-first" })
