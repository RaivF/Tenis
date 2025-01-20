import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createGlobalStyle } from 'styled-components'
import { Provider } from 'react-redux'
import { store } from './Store/store.ts'
import { BrowserRouter } from 'react-router-dom'

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding:0;
    box-sizing:border-box;
    max-width: 1920px;
      
  }
`

createRoot(document.getElementById('root')!).render(
	<>
		<Provider store={store}>
			<GlobalStyle />
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	</>
)
