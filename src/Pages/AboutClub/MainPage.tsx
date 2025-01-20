import { AboutClubHeaderDescription } from '../../Components/AboutClubCompontns/AboutClubHeaderDescription/NewsHeaderDescription'
import { AboutClubtext } from '../../Components/AboutClubCompontns/AboutClubtext/AboutClubtext'
import { GalleryCorts } from '../../Components/AboutClubCompontns/GalleryCorts/GalleryCorts'
import { Footer } from '../../Components/PublicComponents/Footer/Footer'
import { Header } from '../../Components/PublicComponents/Header/Header'

export const AboutClub = () => {
	return (
		<>
			<Header />
			<AboutClubHeaderDescription />
			<GalleryCorts></GalleryCorts>
			<AboutClubtext />

			<Footer />
		</>
	)
}
