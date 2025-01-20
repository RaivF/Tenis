import { CardN } from './Card/Card'
import { CardsNewsContainer } from './Style.CardNews'

export const CardsNews = ({ ...news }) => {
	const newsArray = news.news.News
	return (
		<CardsNewsContainer>
			{newsArray.map((index: number) => (
				<CardN key={index} />
			))}
		</CardsNewsContainer>
	)
}
