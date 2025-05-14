import { useEffect } from "react"
import { useQuery, DocumentNode, useApolloClient } from "./index"

interface IHookProps<T> {
  fullQuery: DocumentNode
  updatedAtQuery: DocumentNode
  getUpdatedAt: (data: T) => string
}

export const useCacheWithUpdatedAt = <T>(options: IHookProps<T>) => {
  const AClient = useApolloClient()
  const { getUpdatedAt, fullQuery, updatedAtQuery } = options
  const { data: fullData, loading: fullLoading, error, refetch } = useQuery<T>(fullQuery, { client: AClient, fetchPolicy: "cache-first" })

  const { data: updatedData, loading: updatedLoading } = useQuery<T>(updatedAtQuery, { client: AClient, fetchPolicy: "network-only" })

  useEffect(() => {
    if (!updatedLoading && updatedData && fullData) {
      if (getUpdatedAt(updatedData) !== getUpdatedAt(fullData)) {
        refetch()
      }
    }
  }, [updatedLoading, updatedData, fullData, refetch])

  return {
    data: fullData,
    loading: fullLoading || updatedLoading,
    error,
    refetch
  }
}
