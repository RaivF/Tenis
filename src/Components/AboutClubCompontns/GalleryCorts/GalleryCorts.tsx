import { ControlsButton } from '../ControlsButton/Card'

import {
	GalleryContainer,
	HeadServices,
	PriceServicesContainer,
	ServicesContainer,
	Title,
	GalleryImg,
	GalleryImgDesc,
} from './Style.Priceservices'

export const GalleryCorts = () => {
	return (
		<PriceServicesContainer>
			<ServicesContainer>
				<HeadServices>
					<Title>Фото кортов</Title>
					<ControlsButton></ControlsButton>
				</HeadServices>
				<GalleryContainer>
					<GalleryImg>
						<GalleryImgDesc>Летний корт</GalleryImgDesc>
					</GalleryImg>
				</GalleryContainer>
			</ServicesContainer>
		</PriceServicesContainer>
	)
}
