import { ApolloProvider } from "@apollo/client"
import { AClient } from "./ApolloClient"

const Provider = ({ children }: { children: React.ReactNode }) => {
  return <ApolloProvider client={AClient}>{children}</ApolloProvider>
}

export default Provider
