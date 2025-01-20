import {
	CardContainer,
	ImgContainer,
	Img,
	Date,
	Description,
	MoreButton,
} from './Style.Card'

export const CardN = () => {
	return (
		<>
			<CardContainer>
				<ImgContainer>
					<Img></Img>
				</ImgContainer>
				<Date>22 июля 2022 года</Date>
				<Description>
					Consequat consequat augue quis urna arcu scelerisque ac montes, sed.
					Arcu orci quam lectus orci in.
				</Description>
				<MoreButton>Подробнее</MoreButton>
			</CardContainer>
		</>
	)
}
