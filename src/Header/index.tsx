import { useStore } from "../../lib"
import { useSelector } from "../../lib/useSelector"

export const Header = () => {
  console.log('Header render - user info')
  
  const counter = useSelector(value => value.counter)

  return (
    <header>Fala galera beleza, counter: {counter}</header>
  )
}