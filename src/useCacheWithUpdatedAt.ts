import { useEffect, useRef } from "react"
import { useQuery, useLazyQuery, type DocumentNode, NetworkStatus } from "./index"
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
    refetch,
    networkStatus
  } = useQuery<TFull>(fullQuery, {
    client,
    fetchPolicy: "cache-first"
  })
  const isFromCache = useRef(networkStatus === NetworkStatus.ready && !fullLoading).current

  const [getLazy, { data: updatedData, loading: updatedLoading }] = useLazyQuery<TUpdated>(updatedAtQuery, {
    client,
    fetchPolicy: "no-cache"
  })

  useEffect(() => {
    if (isFromCache) {
      getLazy()
    }
  }, [isFromCache, getLazy])

  useEffect(() => {
    if (!updatedLoading && updatedData && fullData) {
      if (getUpdatedAt(fullData) !== getUpdatedAt(updatedData)) {
        setTimeout(refetch, 5000)
      }
    }
  }, [updatedLoading, updatedData, fullData, refetch, getUpdatedAt])

  return {
    data: fullData,
    loading: fullLoading || updatedLoading,
    error,
    refetch
  }
}
