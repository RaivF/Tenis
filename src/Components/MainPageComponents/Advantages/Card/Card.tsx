import { CardContainer, TextContainer, ContainerBGImg } from './Style.Card'

export const Card = (props: { text: string }) => {
	return (
		<>
			<CardContainer>
				<ContainerBGImg>
					<TextContainer>{props.text}</TextContainer>
				</ContainerBGImg>
			</CardContainer>
		</>
	)
}
