import { useStore } from "../../lib/context"

export const Header = () => {
  console.log('Header render - user info')
  
  const { store } = useStore()

  return (
    <header>Fala galera beleza, counter: {store.counter}</header>
  )
}