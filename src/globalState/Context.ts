import { createContext, useContext } from "react"
import { ApolloClient, NormalizedCacheObject } from "../index"

interface IContextType {
  client: ApolloClient<NormalizedCacheObject>
}

const GlobalContext = createContext<IContextType | null>(null)

const useGetClient = () => {
  const globalContext = useContext(GlobalContext)

  if (!globalContext) {
    throw new Error("useState has to be used within <GlobalContext.Provider>")
  }
  return globalContext.client
}

export { useGetClient }

export default GlobalContext
