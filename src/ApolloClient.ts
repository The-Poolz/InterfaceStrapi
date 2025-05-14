import { ApolloClient, InMemoryCache } from "@apollo/client"
import { CachePersistor, LocalStorageWrapper } from "apollo3-cache-persist"

const cache = new InMemoryCache()
export const newPersistor = new CachePersistor({
  cache,
  storage: new LocalStorageWrapper(window.localStorage),
  debug: !!~location.hash.indexOf("debug")
  // trigger: 'write',
})
await newPersistor.restore()

console.log("cache restored")

export const AClient = new ApolloClient({
  uri: "https://data.poolz.finance/graphql",
  cache,
  defaultOptions: {
    watchQuery: { fetchPolicy: "cache-first" },
    query: { fetchPolicy: "cache-first" }
  }
})
