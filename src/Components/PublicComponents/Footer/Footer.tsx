import {
	HeaderMainContainer,
	LogoContainer,
	MenuContainer,
	SocialNetwork,
	YouTube,
	VK,
	TG,
} from './Style.Footer'

export const Footer = () => {
	return (
		<HeaderMainContainer>
			<LogoContainer>2022 © Все права защищены.</LogoContainer>
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
				<TG></TG>
			</SocialNetwork>
		</HeaderMainContainer>
	)
}
