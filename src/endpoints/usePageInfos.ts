import { useCacheWithUpdatedAt } from "../useCacheWithUpdatedAt"
import * as types from "../__generated__/graphql"
import { graphql } from "../__generated__"

const GET_PAGE_INFOS = graphql(`
  query PageInfos {
    pageInfos(sort: ["updatedAt:asc"]) {
      Link
      Title
      Description
      updatedAt
    }
  }
`)
const GET_PAGE_INFOS_UPDATED = graphql(`
  query PageInfosUpdated {
    pageInfos(sort: ["updatedAt:asc"]) {
      updatedAt
    }
  }
`)

export const usePageInfos = () =>
  useCacheWithUpdatedAt<NonNullable<types.PageInfosQuery>, NonNullable<types.PageInfosUpdatedQuery>>({
    fullQuery: GET_PAGE_INFOS,
    updatedAtQuery: GET_PAGE_INFOS_UPDATED,
    getUpdatedAt: (data) => {
      return data.pageInfos?.map((c) => c?.updatedAt ?? "").join(",") ?? ""
    }
  })
