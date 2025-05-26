import { useCacheWithUpdatedAt } from "../useCacheWithUpdatedAt"
import * as types from "../__generated__/graphql"
import { graphql } from "../__generated__"

const GET_OPEN_GRANTS = graphql(`
  query OpenGrants {
    openGrants {
      documentId
      Name
      Text
      Link
      updatedAt
      icon {
        url
      }
    }
  }
`)

const GET_OPEN_GRANTS_UPDATED = graphql(`
  query OpenGrantsUpdated {
    openGrants {
      updatedAt
    }
  }
`)

export const useOpenGrants = () =>
  useCacheWithUpdatedAt<NonNullable<types.OpenGrantsQuery>, NonNullable<types.OpenGrantsUpdatedQuery>>({
    fullQuery: GET_OPEN_GRANTS,
    updatedAtQuery: GET_OPEN_GRANTS_UPDATED,
    getUpdatedAt: (data) => data.openGrants?.map((c) => c?.updatedAt ?? "").join(",") ?? ""
  })
