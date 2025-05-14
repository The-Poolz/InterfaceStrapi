import { useQuery } from "../index"
import { graphql } from "../__generated__"
import { useGetClient } from "../globalState/Context"

const GET_MAIN = graphql(`
  query Main {
    main {
      sections {
        Title
        smallText
        TopBgUrl
        secondCta {
          text
          url
          ctaText
          addText
          flag
          backColor
          TextColor
          hoverBackColor
          id
        }
        secondTitle
        SecondSmallText
        MainCTA {
          id
          text
          url
          ctaText
          addText
          flag
          backColor
          TextColor
          hoverBackColor
        }
        TopBg {
          url
        }
        htmlColorText {
          text
          url
          id
        }
      }
    }
  }
`)

export const useMain = () => {
  const AClient = useGetClient()
  return useQuery(GET_MAIN, { client: AClient })
}
