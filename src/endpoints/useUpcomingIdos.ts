import { useQuery, AClient } from "../index"
import { graphql } from "../__generated__"

const GET_UPCOMING_IDO = graphql(`
  query ProjectsInformations($FinishTime: DateTime!) {
    projectsInformations(
      filters: { IsTimeTBA: { eq: true }, IsShow: { eq: true }, FinishTime: { gte: $FinishTime } }
      sort: "StartTime:ASC"
    ) {
      documentId
      PoolzBackId
      WhitelistId
      Name
      StartTime
      FinishTime
      ATHROI
      ido_badge {
        Name
        ExplainText
        ColorCode
      }
      Original {
        TokenAddress
        chain_setting {
          DisplayText
          Show
          chain {
            name
            symbol
            chainId
          }
          colorIcon {
            icon {
              url
            }
          }
          WhiteLogo {
            url
          }
        }
      }
      VisualText {
        Tokenomics {
          MarketCap
          TGEMarketCap
          Symbol
          CirculationSupply
          TotalSupply
          USDPrice
          TotalRaise
        }
      }
    }
  }
`)

export const useUpcomingIdos = (FinishTime?: string) =>
  useQuery(GET_UPCOMING_IDO, {
    client: AClient,
    fetchPolicy: "cache-first",
    variables: { FinishTime: FinishTime ?? new Date().toISOString() }
  })
