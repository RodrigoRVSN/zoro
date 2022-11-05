import { useCallback, useEffect, useMemo, useState } from 'react'
import { useStore } from './context'
import type { GetterParams } from './types/useSelector'

export const useSelector = (getter: GetterParams) => {
  const { getStore, registerListener, unregisterListener } = useStore()
  const store = getStore()

  const [state, setState] = useState(getter(store))
  const listenerId = useMemo(() => Math.random(), [])

  const listener = useCallback((newStore: {
    counter: number;
    user: null;
}) => {
    const newValue = getter(newStore)
    const hasChanged = state !== newValue

    if(hasChanged) setState(newValue)
  }, [])

  useEffect(() => {
    registerListener(listenerId, listener)

    return () => unregisterListener(listenerId)
  }, [])

  return state
}