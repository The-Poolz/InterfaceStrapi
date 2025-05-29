import { useLazyQuery, useQuery, type QueryHookOptions } from "../index"
import { graphql } from "../__generated__"
import { type GrowsQuery, type GrowsQueryVariables } from "../__generated__/graphql"
import { useGetClient } from "../globalState/Context"

const GET_GROWS = graphql(`
  query Grows($filters: GrowFiltersInput, $pagination: PaginationArg, $sort: [String]) {
    grows(filters: $filters, sort: $sort, pagination: $pagination) {
      documentId
      reward
      text
      projectName
      participants
      startTime
      subTitle
      data_ccode
      DescriptionMainText
      DescriptionSubText
      finishTime
      BannerUrl
      BannerText
      order
      showInMainBanner
      Show
      updatedAt
      grow_badge {
        documentId
        Name
        BackgroundColor
        TooltipText
        Color
      }
      Banner {
        url
      }
      mainPicture {
        url
      }
      mainIcon {
        url
      }
    }
  }
`)

export const useGrows = (options?: QueryHookOptions<GrowsQuery, GrowsQueryVariables>) => {
  const client = useGetClient()

  return useQuery<GrowsQuery, GrowsQueryVariables>(GET_GROWS, {
    ...options,
    client,
    skip: options?.skip ?? !options?.variables
  })
}

export const useLazyGrows = () => {
  const client = useGetClient()
  return useLazyQuery(GET_GROWS, {
    client
  })
}
