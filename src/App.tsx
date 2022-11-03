import { ChangeUser } from './ChangeUser'
import { Content } from './Content'
import { Counter } from './Counter'
import { Header } from './Header'

function App() {
  console.log('App render')

  return (
    <div>
      <Header />
      <Counter />
      <Content />
      <ChangeUser />
    </div>
  )
}

export default App
