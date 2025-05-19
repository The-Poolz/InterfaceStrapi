import { useEffect, useRef } from "react"
import { useQuery, useLazyQuery, type DocumentNode, NetworkStatus } from "./index"
import { useGetClient } from "./globalState/Context"

interface IHookProps<TFull, TUpdated, TVariables extends Record<string, unknown> | undefined = undefined> {
  fullQuery: DocumentNode
  updatedAtQuery: DocumentNode
  getUpdatedAt: (data: TUpdated | TFull) => string
  variables?: TVariables
}

export const useCacheWithUpdatedAt = <TFull, TUpdated, TVariables extends Record<string, unknown> | undefined = undefined>({
  fullQuery,
  updatedAtQuery,
  getUpdatedAt,
  variables
}: IHookProps<TFull, TUpdated, TVariables>) => {
  const client = useGetClient()

  const {
    data: fullData,
    loading: fullLoading,
    error,
    refetch,
    networkStatus
  } = useQuery<TFull>(fullQuery, {
    client,
    variables,
    fetchPolicy: "cache-first"
  })
  const isFromCache = useRef(networkStatus === NetworkStatus.ready && !fullLoading).current

  const [getLazy, { data: updatedData, loading: updatedLoading }] = useLazyQuery<TUpdated>(updatedAtQuery, {
    client,
    fetchPolicy: "no-cache"
  })

  useEffect(() => {
    if (isFromCache) {
      getLazy({ variables })
    }
  }, [isFromCache, getLazy]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!updatedLoading && updatedData && fullData) {
      if (getUpdatedAt(fullData) !== getUpdatedAt(updatedData)) {
        refetch()
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
