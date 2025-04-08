import Provider from "./StrapiProvider"

export * from "./endpoints/useFooter"
export * from "./endpoints/useHeader"
export * from "./endpoints/useAccount"
export * from "./endpoints/useMain"
export * from "./endpoints/useDefaultWallets"
export * from "./endpoints/usePageInfos"
export * from "./endpoints/useVaultFaqs"
export * as types from "./__generated__/graphql"
export * from "@apollo/client"
export * from "@apollo/client/testing"
export * from "./ApolloClient"

export default Provider
