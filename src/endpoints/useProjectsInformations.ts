import { useQuery, useLazyQuery, AClient } from "../index"
import { graphql } from "../__generated__"
import { type ProjectsInformationFiltersInput, type PaginationArg } from "../__generated__/graphql"

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
          TokenPrice
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
    covers {
      picture {
        url
      }
    }
  }
`)

const GET_PROJECTS_DETAILS = graphql(`
  query ProjectsInformations($filters: ProjectsInformationFiltersInput, $pagination: PaginationArg, $sort: [String]) {
    projectsInformations(filters: $filters, sort: $sort, pagination: $pagination) {
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
            Color
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
          TokenPrice
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
          ChainAddresses {
            Address
            chain_setting {
              DisplayText
              chain {
                name
                symbol
                chainId
              }
            }
          }
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
      Investors {
        investor {
          Name
          Icon {
            url
          }
        }
      }
    }
  }
`)

export const useProjectDetails = (documentId?: string) =>
  useQuery(GET_PROJECT_DETAILS, documentId ? { client: AClient, fetchPolicy: "cache-first", variables: { documentId } } : { skip: true })

export const useProjectsDetails = (variables?: { filters: ProjectsInformationFiltersInput; pagination: PaginationArg; sort?: string[] }) =>
  useQuery(GET_PROJECTS_DETAILS, variables ? { client: AClient, fetchPolicy: "cache-first", variables } : { skip: true })

export const useLazyProjectsDetails = () => {
  return useLazyQuery(GET_PROJECTS_DETAILS, {
    client: AClient
  })
}
