import { useCallback, useEffect, useMemo, useState } from 'react'
import { innerStore, useStore } from '.'
import { GetterParams } from './types/useSelector'

export function useSelector(getter: GetterParams<typeof innerStore>) {
  const { getStore, registerListener, unregisterListener } = useStore()
  const store = getStore()

  const [state, setState] = useState(getter(store))
  const listenerId = useMemo(() => Math.random(), [])

  const listener = useCallback((newStore: typeof store) => {
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