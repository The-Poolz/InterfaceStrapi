import Provider from "./StrapiProvider"
export default Provider

export * from "@apollo/client"
export * from "@apollo/client/testing"
export * from "./ApolloClient"
export * as types from "./__generated__/graphql"

export * from "./endpoints/useFooter"
export * from "./endpoints/useHeader"
export * from "./endpoints/useAccount"
export * from "./endpoints/useMain"
export * from "./endpoints/useDefaultWallets"
export * from "./endpoints/usePageInfos"
export * from "./endpoints/useVaultFaqs"
export * from "./endpoints/useProjectsInformations"
export * from "./endpoints/useLockTokenWhitelists"
export * from "./endpoints/useChainSetting"
