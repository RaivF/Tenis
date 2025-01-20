import './App.css'
import { NewsPage } from './Pages/NewsPage/NewsPage'

import { MainPage } from './Pages/MainPage/MainPage'
import { Route, Routes } from 'react-router-dom'
import { AboutClub } from './Pages/AboutClub/MainPage'

function App() {
	return (
		<Routes>
			<Route path='/' element={<MainPage />} />
			<Route path='/NewsPage' element={<NewsPage />} />
			<Route path='/AboutClub' element={<AboutClub />} />
		</Routes>
	)
}

export default App
