import ReactDOM from 'react-dom/client'
import { StoreProvider } from '../lib';
import App from './App'
import { store } from './store'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StoreProvider initialData={store}>
    <App />
  </StoreProvider>
)
