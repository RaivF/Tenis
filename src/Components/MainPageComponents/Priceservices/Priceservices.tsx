import { ControlsButton } from '../ControlsButton/Card'

import {
	GalleryContainer,
	HeadServices,
	PriceContainer,
	PriceContainerElement,
	PriceServicesContainer,
	ServicesContainer,
	Title,
	GalleryImg,
	GalleryImgDesc,
	PriceContainerText,
	PriceImgContainerLeft,
} from './Style.Priceservices'

export const PriceServices = () => {
	return (
		<PriceServicesContainer>
			<PriceContainer>
				<Title>Цены и абонементы</Title>
				<PriceContainerElement>
					<PriceContainerText>Зимний сезон 2021-2022</PriceContainerText>
					<PriceImgContainerLeft></PriceImgContainerLeft>
				</PriceContainerElement>
				<PriceContainerElement>
					<PriceContainerText>Абонементы</PriceContainerText>
					<PriceImgContainerLeft></PriceImgContainerLeft>
				</PriceContainerElement>
				<PriceContainerElement>
					<PriceContainerText>Скидки</PriceContainerText>
					<PriceImgContainerLeft></PriceImgContainerLeft>
				</PriceContainerElement>
				<PriceContainerElement>
					<PriceContainerText>Дополнительные услуги</PriceContainerText>
					<PriceImgContainerLeft></PriceImgContainerLeft>
				</PriceContainerElement>
			</PriceContainer>
			<ServicesContainer>
				<HeadServices>
					<Title>Услуги</Title>
					<ControlsButton></ControlsButton>
				</HeadServices>
				<GalleryContainer>
					<GalleryImg>
						<GalleryImgDesc>Уютное кафе</GalleryImgDesc>
					</GalleryImg>
				</GalleryContainer>
			</ServicesContainer>
		</PriceServicesContainer>
	)
}
