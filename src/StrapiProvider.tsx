import React, { useEffect, useState } from "react"
import { ApolloProvider, ApolloClient, type NormalizedCacheObject, InMemoryCache } from "./index"
import { CachePersistor, LocalStorageWrapper } from "apollo3-cache-persist"
import GlobalContext from "./globalState/Context"

const Provider = ({ children }: { children: React.ReactNode }) => {
  const [client, setClient] = useState<ApolloClient<NormalizedCacheObject>>()

  useEffect(() => {
    async function init() {
      const cache = new InMemoryCache()
      const newPersistor = new CachePersistor({
        cache,
        storage: new LocalStorageWrapper(window.localStorage),
        debug: !!~location.hash.indexOf("debug")
      })
      await newPersistor.restore()
      setClient(
        new ApolloClient({
          uri: "https://data.poolz.finance/graphql",
          cache,
          defaultOptions: {
            watchQuery: { fetchPolicy: "cache-first" },
            query: { fetchPolicy: "cache-first" }
          }
        }),
      )
    }
    init().catch(console.error)
  }, [])

  if (!client) return null
  return <ApolloProvider client={client}>
    <GlobalContext.Provider value={{ client }}>
      {children}
    </GlobalContext.Provider>
  </ApolloProvider>
}

export default Provider
