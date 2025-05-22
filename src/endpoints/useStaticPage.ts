import { useCacheWithUpdatedAt } from "../useCacheWithUpdatedAt"
import * as types from "../__generated__/graphql"
import { graphql } from "../__generated__"

const GET_PRIVACY = graphql(`
  query Privacy {
    privacy {
      Value
      updatedAt
    }
  }
`)
const GET_PRIVACY_UPDATED = graphql(`
  query PrivacyUpdated {
    privacy {
      updatedAt
    }
  }
`)

export const usePrivacy = () =>
  useCacheWithUpdatedAt<NonNullable<types.PrivacyQuery>, NonNullable<types.PrivacyUpdatedQuery>>({
    fullQuery: GET_PRIVACY,
    updatedAtQuery: GET_PRIVACY_UPDATED,
    getUpdatedAt: (data) => data.privacy?.updatedAt ?? ""
  })

const GET_CONDITION = graphql(`
  query Condition {
    condition {
      Value
      updatedAt
    }
  }
`)

const GET_CONDITION_UPDATED = graphql(`
  query ConditionUpdated {
    condition {
      updatedAt
    }
  }
`)

export const useCondition = () =>
  useCacheWithUpdatedAt<NonNullable<types.ConditionQuery>, NonNullable<types.ConditionUpdatedQuery>>({
    fullQuery: GET_CONDITION,
    updatedAtQuery: GET_CONDITION_UPDATED,
    getUpdatedAt: (data) => data.condition?.updatedAt ?? ""
  })

const GET_LOCK_POOLZ_TERM = graphql(`
  query LockPoolzTerm {
    lockPoolzTerm {
      Value
      updatedAt
    }
  }
`)

const GET_LOCK_POOLZ_TERM_UPDATED = graphql(`
  query LockPoolzTermUpdated {
    lockPoolzTerm {
      updatedAt
    }
  }
`)

export const useLockPoolzTerm = () =>
  useCacheWithUpdatedAt<NonNullable<types.LockPoolzTermQuery>, NonNullable<types.LockPoolzTermUpdatedQuery>>({
    fullQuery: GET_LOCK_POOLZ_TERM,
    updatedAtQuery: GET_LOCK_POOLZ_TERM_UPDATED,
    getUpdatedAt: (data) => data.lockPoolzTerm?.updatedAt ?? ""
  })

const GET_INVEST_TERM = graphql(`
  query InvestTerm {
    investTerm {
      Value
      updatedAt
    }
  }
`)

const GET_INVEST_TERM_UPDATED = graphql(`
  query InvestTermUpdated {
    investTerm {
      updatedAt
    }
  }
`)

export const useInvestTerm = () =>
  useCacheWithUpdatedAt<NonNullable<types.InvestTermQuery>, NonNullable<types.InvestTermUpdatedQuery>>({
    fullQuery: GET_INVEST_TERM,
    updatedAtQuery: GET_INVEST_TERM_UPDATED,
    getUpdatedAt: (data) => data.investTerm?.updatedAt ?? ""
  })
