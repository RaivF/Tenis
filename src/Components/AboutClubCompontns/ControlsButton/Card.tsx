import {
	ControlButtonContainer,
	ImgContainerLeft,
	ImgContainerRight,
	Left,
	Right,
} from './Style.Card'

export const ControlsButton = () => {
	return (
		<>
			<ControlButtonContainer>
				<Left>
					<ImgContainerLeft></ImgContainerLeft>
				</Left>
				<Right>
					<ImgContainerRight></ImgContainerRight>
				</Right>
			</ControlButtonContainer>
		</>
	)
}
