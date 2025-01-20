import { useDispatch, useSelector } from 'react-redux'
import { CardsNews } from '../../Components/NewsPageComponents/CardsNews/CardNews'
import { NewsHeaderDescription } from '../../Components/NewsPageComponents/NewsHeaderDescription/NewsHeaderDescription'
import { Footer } from '../../Components/PublicComponents/Footer/Footer'
import { Header } from '../../Components/PublicComponents/Header/Header'
import { getNewNews } from '../../Store/News'
import { api } from '../../api/api'
import { useEffect } from 'react'

export const NewsPage = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		api.getVideos().then(result => {
			dispatch(getNewNews(result.slice(0, 6)))
		})
	}, []) //запрос новостей с  сервера

	const news = useSelector((state: { news: string[] }) => state.news)

	return (
		<>
			<Header />
			<NewsHeaderDescription />
			<CardsNews news={news} />
			<Footer />
		</>
	)
}
