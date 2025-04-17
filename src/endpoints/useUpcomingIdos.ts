import { useQuery, AClient } from "../index"
import { graphql } from "../__generated__"

const GET_UPCOMING_IDO = graphql(`
  query ProjectsInformations($FinishTime: DateTime!) {
    projectsInformations(
      filters: { IsShow: { eq: true }, or: [{ IsTimeTBA: { eq: true } }, { FinishTime: { gte: $FinishTime } }] }
      sort: ["IsTimeTBA:ASC", "StartTime:ASC"]
      pagination: { limit: 100 }
    ) {
      documentId
      IsTimeTBA
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
      UploadPool {
        id
        WhitelistRate
        PublicRate
        TotalTokens
        Participants
        buy_with {
          Name
        }
      }
      Syntetic {
        TokenAddress
        chain_setting {
          DisplayText
          chain {
            chainId
            name
            symbol
          }
          colorIcon {
            Color
            icon {
              url
            }
          }
        }
      }
      Logo {
        url
      }
      Block {
        url
      }
    }
  }
`)

export const useUpcomingIdos = (FinishTime?: string) =>
  useQuery(
    GET_UPCOMING_IDO,
    FinishTime
      ? {
          client: AClient,
          fetchPolicy: "cache-first",
          variables: { FinishTime }
        }
      : { skip: true }
  )
