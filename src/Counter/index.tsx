import { useStore } from "../../lib/context"

export const Counter = () => {
  console.log('Counter render - counter info')

  const { store, updateStore } = useStore()

  const handleIncrement = () => {
    updateStore({ counter: store.counter + 1 })
  }

  const handleDecrement = () => {
    updateStore({ counter: store.counter - 1 })
  }

  return (
    <>
      <p>{store.counter}</p>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </>
  )
}