import { useCacheWithUpdatedAt } from "../useCacheWithUpdatedAt"
import * as types from "../__generated__/graphql"
import { graphql } from "../__generated__"

const GET_MEDIA_KITS = graphql(`
  query MediaKits {
    mediaKits {
      documentId
      Name
      Text
      updatedAt
      Link {
        url
        name
      }
    }
  }
`)

const GET_MEDIA_KITS_UPDATED = graphql(`
  query MediaKitsUpdated {
    mediaKits {
      updatedAt
    }
  }
`)

export const useMediaKits = () =>
  useCacheWithUpdatedAt<NonNullable<types.MediaKitsQuery>, NonNullable<types.MediaKitsUpdatedQuery>>({
    fullQuery: GET_MEDIA_KITS,
    updatedAtQuery: GET_MEDIA_KITS_UPDATED,
    getUpdatedAt: (data) => data.mediaKits?.map((c) => c?.updatedAt ?? "").join(",") ?? ""
  })
