import { ApolloClient, InMemoryCache } from "@apollo/client"

export const AClient = new ApolloClient({
  uri: "https://data.poolz.finance/graphql",
  cache: new InMemoryCache()
})
