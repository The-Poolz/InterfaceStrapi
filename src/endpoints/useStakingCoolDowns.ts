import { useCacheWithUpdatedAt } from "../useCacheWithUpdatedAt"
import * as types from "../__generated__/graphql"
import { graphql } from "../__generated__"

const GET_STAKINH_COOL_DOWNS = graphql(`
  query StakingCoolDowns {
    stakingCoolDowns(sort: ["documentId:asc"]) {
      documentId
      Amount
      CoolDownPeriod
      type
      text
      updatedAt
    }
  }
`)
const GET_STAKINH_COOL_DOWNS_UPDATED = graphql(`
  query StakingCoolDownsUpdated {
    stakingCoolDowns(sort: ["documentId:asc"]) {
      updatedAt
    }
  }
`)

export const useStakingCoolDowns = () =>
  useCacheWithUpdatedAt<NonNullable<types.StakingCoolDownsQuery>, NonNullable<types.StakingCoolDownsUpdatedQuery>>({
    fullQuery: GET_STAKINH_COOL_DOWNS,
    updatedAtQuery: GET_STAKINH_COOL_DOWNS_UPDATED,
    getUpdatedAt: (data) => {
      return data.stakingCoolDowns?.map((c) => c?.updatedAt ?? "").join(",") ?? ""
    }
  })
