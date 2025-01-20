import './App.css'
import { NewsPage } from './Pages/NewsPage/NewsPage'

import { MainPage } from './Pages/MainPage/MainPage'
import { Route, Routes } from 'react-router-dom'

function App() {
	return (
		<Routes>
			<Route path='/' element={<MainPage />} />
			<Route path='/NewsPage' element={<NewsPage />} />
		</Routes>
	)
}

export default App
