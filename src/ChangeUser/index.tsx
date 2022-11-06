import { useStore } from "../../lib"
import { useSelector } from "../../lib/useSelector"

export const ChangeUser = () => {
  console.log('ChangeUser render - user info')

  const { setStore } = useStore()
  const age = useSelector(value => value.user.age)

  const handleChangeUser = () => {
    setStore({ user: { age: Math.random() } })
  }
  
  return (
    <button onClick={handleChangeUser}>changing user, age: {age}</button>
  )
}