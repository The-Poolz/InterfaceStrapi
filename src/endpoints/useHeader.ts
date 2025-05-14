import { useQuery } from "../index"
import { graphql } from "../__generated__"
import { useGetClient } from "../globalState/Context"

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
  const AClient = useGetClient()
  return useQuery(GET_HEADER, { client: AClient })
}
