import { useStore } from "../../lib/context"

export const ChangeUser = () => {
  console.log('ChangeUser render - user info')

  const { store, updateStore } = useStore()

  const handleChangeUser = () => {
    updateStore({ user: { age: Math.random() } })
  }
  
  return (
    <button onClick={handleChangeUser}>changing user, age: {store.user?.age}</button>
  )
}