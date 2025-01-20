import { Card } from '../Card/Card'
import { CardsContainer } from './Style.Cards'

export const Cards = () => {
	return (
		<CardsContainer>
			<Card text={'5 летних грунтовых кортов'}></Card>
			<Card text={'Зал с покрытием “Искусственная трава”'}></Card>
			<Card text={'Зал с покрытием“Хард”'}></Card>
		</CardsContainer>
	)
}
