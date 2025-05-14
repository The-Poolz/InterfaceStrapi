import { useQuery, useApolloClient } from "../index"
import { graphql } from "../__generated__"

const GET_HEADER = graphql(`
  query Header {
    header {
      HeaderList {
        id
        text
        url
        ctaText
        textColor
      }
    }
  }
`)

export const useHeader = () => {
  const AClient = useApolloClient()
  return useQuery(GET_HEADER, { client: AClient })
}
