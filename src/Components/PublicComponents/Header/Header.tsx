import {
	HeaderMainContainer,
	LogoContainer,
	MenuContainer,
	SocialNetwork,
	VK,
	YouTube,
} from './Style.Header'

export const Header = () => {
	return (
		<HeaderMainContainer>
			<LogoContainer></LogoContainer>
			<MenuContainer>
				<span>Главная</span>
				<span>О клубе</span>
				<span>Турниры</span>
				<span>Услуги</span>
				<span>Детский теннис</span>
				<span>Галерея</span>
				<span>Цены</span>
				<span>Контакты</span>
			</MenuContainer>
			<SocialNetwork>
				<YouTube></YouTube>
				<VK></VK>
			</SocialNetwork>
		</HeaderMainContainer>
	)
}
