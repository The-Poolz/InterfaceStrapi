import { useEffect } from "react"
import { useQuery, DocumentNode } from "./index"
import { useGetClient } from "./globalState/Context"

interface IHookProps<TFull, TUpdated> {
  fullQuery: DocumentNode
  updatedAtQuery: DocumentNode
  getUpdatedAt: (data: TUpdated | TFull) => string
}

export const useCacheWithUpdatedAt = <TFull, TUpdated>({ fullQuery, updatedAtQuery, getUpdatedAt }: IHookProps<TFull, TUpdated>) => {
  const client = useGetClient()

  const {
    data: fullData,
    loading: fullLoading,
    error,
    refetch
  } = useQuery<TFull>(fullQuery, {
    client,
    fetchPolicy: "cache-first"
  })

  const { data: updatedData, loading: updatedLoading } = useQuery<TUpdated>(updatedAtQuery, {
    client,
    fetchPolicy: "network-only"
  })

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
