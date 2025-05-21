import { useCacheWithUpdatedAt } from "../useCacheWithUpdatedAt"
import * as types from "../__generated__/graphql"
import { graphql } from "../__generated__"

const GET_OUR_PARTNERS = graphql(`
  query OurPartners {
    ourPartners(pagination: { limit: 100 }, sort: ["documentId:asc"]) {
      documentId
      Name
      updatedAt
      DarkLogo {
        url
      }
    }
  }
`)
const GET_OUR_PARTNERS_UPDATED = graphql(`
  query OurPartnersUpdated {
    ourPartners(pagination: { limit: 100 }, sort: ["documentId:asc"]) {
      updatedAt
    }
  }
`)

export const useOurPartners = () =>
  useCacheWithUpdatedAt<NonNullable<types.OurPartnersQuery>, NonNullable<types.OurPartnersUpdatedQuery>>({
    fullQuery: GET_OUR_PARTNERS,
    updatedAtQuery: GET_OUR_PARTNERS_UPDATED,
    getUpdatedAt: (data) => {
      return data.ourPartners?.map((c) => c?.updatedAt ?? "").join(",") ?? ""
    }
  })
