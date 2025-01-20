import { ControlsButton } from '../ControlsButton/Card'
import { Card } from './Card/Card'
import {
	HeaderCoachingStaff,
	Title,
	Gallery,
	CoachingStaffContainer,
} from './Style.CoachingStaff'

export const CoachingStaff = () => {
	return (
		<CoachingStaffContainer>
			<HeaderCoachingStaff>
				<Title>Тренерский состав</Title>
				<ControlsButton></ControlsButton>
			</HeaderCoachingStaff>
			<Gallery>
				<Card></Card>
				<Card></Card>
				<Card></Card>
				<Card></Card>
				<Card></Card>
				<Card></Card>
			</Gallery>
		</CoachingStaffContainer>
	)
}
