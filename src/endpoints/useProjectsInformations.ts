import { useQuery, AClient } from "../index"
import { graphql } from "../__generated__"

const GET_PROJECT_DETAILS = graphql(`
  query ProjectsInformation($documentId: ID!) {
    projectsInformation(documentId: $documentId) {
      PoolzBackId
      WhitelistId
      Name
      StartTime
      FinishTime
      IsShow
      IsTimeTBA
      ATHROI
      Warning_Text
      blockLocations
      documentId
      FullTokenDistribution {
        id
        Text
        DistributionType
        TGE {
          Unlock
          Ratio
          IsTimeTBA
        }
        non_evm_chain {
          DisplayText
          Regex
          Icon {
            url
          }
        }
        Monthly {
          Ratio
          IsTimeTBA
          Unlock
        }
      }
      VisualText {
        id
        Highlights {
          id
          Value
        }
        Overview {
          id
          Name
          BoldText
          Text
        }
        Tokenomics {
          id
          MarketCap
          TGEMarketCap
          Symbol
          CirculationSupply
          TotalSupply
          USDPrice
          TotalRaise
          VisualInfo {
            url
          }
        }
        SmartLinks {
          URL
          link_type {
            Name
            IsOnTop
            DarkIcon {
              url
            }
            LightIcon {
              url
            }
          }
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
      Original {
        TokenAddress
        chain_setting {
          DisplayText
          chain {
            name
            symbol
            chainId
          }
          colorIcon {
            Color
            icon {
              url
            }
          }
        }
      }
      Investors {
        Category
        investor {
          Name
          Icon {
            url
          }
          documentId
        }
      }
      Logo {
        url
      }
      ido_badge {
        Name
        ExplainText
        ColorCode
      }
    }
    covers {
      picture {
        url
      }
    }
  }
`)

export const useProjectDetails = (documentId?: string) =>
  useQuery(GET_PROJECT_DETAILS, documentId ? { client: AClient, fetchPolicy: "cache-first", variables: { documentId } } : { skip: true })
