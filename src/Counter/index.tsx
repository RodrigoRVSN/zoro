import { useStore } from "../../lib/context"
import { useSelector } from "../../lib/useSelector"

export const Counter = () => {
  console.log('Counter render - counter info')

  const { setStore } = useStore()
  const counter = useSelector(value => value.counter)

  const handleIncrement = () => {
    setStore(prevStore => ({ counter: prevStore.counter + 1 }))
  }

  const handleDecrement = () => {
    setStore(prevStore => ({ counter: prevStore.counter - 1 }))
  }

  return (
    <>
      <p>{counter}</p>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </>
  )
}