import { AboutUs } from '../../Components/MainPageComponents/AboutUs/AboutUs'
import { Cards } from '../../Components/MainPageComponents/Advantages/Cards/Cards'
import { CoachingStaff } from '../../Components/MainPageComponents/CoachingStaff/CoachingStaff'
import { HeaderDescription } from '../../Components/MainPageComponents/HeaderDescription/HeaderDescription'
import { PriceServices } from '../../Components/MainPageComponents/Priceservices/Priceservices'
import { Footer } from '../../Components/PublicComponents/Footer/Footer'
import { Header } from '../../Components/PublicComponents/Header/Header'

export const MainPage = () => {
	return (
		<>
			<Header />
			<HeaderDescription />
			<Cards />
			<AboutUs />
			<CoachingStaff />
			<PriceServices />
			<Footer />
		</>
	)
}
