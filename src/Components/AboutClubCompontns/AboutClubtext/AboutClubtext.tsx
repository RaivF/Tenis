import {
	AboutUsContainer,
	ImgContainer,
	DescriptionContainer,
	Title,
	Text,
	OurFeatures,
	Text2,
	FeaturesElement,
	CountFeatures,
	Desc,
	Seven,
	Four,
	Three,
} from './Style.AboutClubtext'

export const AboutClubtext = () => {
	return (
		<>
			<AboutUsContainer>
				<ImgContainer></ImgContainer>
				<DescriptionContainer>
					<Title>Петербургский теннисный клуб имени М.А. Пасечникова</Title>
					<Text>
						Feugiat gravida proin arcu tellus ipsum posuere nisl, consectetur
						scelerisque. Posuere ipsum tellus dignissim etiam lorem ultrices
						risus viverra. Purus volutpat phasellus viverra vestibulum quis.
						Gravida pretium odio enim ut id tempus semper. Urna cum at in
						iaculis mauris at. Tellus, a euismod tincidunt eu orci faucibus. Mi
						faucibus pellentesque molestie nunc, et, tellus. Neque cras mattis
						dolor id. Maecenas vivamus tristique donec neque id convallis.
						Feugiat fusce at est at.
					</Text>
					<Text2>
						Vitae nec eget blandit id nisl. Sit ac dictum lorem mauris posuere
						sit. Gravida commodo egestas pharetra, mi interdum. Ullamcorper
						pulvinar hac risus egestas fusce nunc. Vel auctor proin integer ut
						lacus, sed neque id dictum. At enim quis eu, mattis aliquet varius
						in eu venenatis.
					</Text2>
					<Text2>
						Quisque diam elit donec orci sed dolor. Neque sed sit tortor eget
						urna magna interdum feugiat ut. In purus rhoncus egestas euismod
						morbi. Ut velit facilisi in cras tempus turpis sapien ipsum, mattis.
						Tempor sit nulla ac lorem placerat congue. Nulla purus vestibulum
						suscipit pellentesque risus non.
					</Text2>

					<OurFeatures>
						<FeaturesElement>
							<CountFeatures>
								<Seven></Seven>
							</CountFeatures>
							<Desc>Летних грунтовых кортов</Desc>
						</FeaturesElement>
						<FeaturesElement>
							<CountFeatures>
								<Four></Four>
							</CountFeatures>
							<Desc>Зимних корта с покрытием «искусственная трава»</Desc>
						</FeaturesElement>
						<FeaturesElement>
							<CountFeatures>
								<Three></Three>
							</CountFeatures>
							<Desc>Зимних корта с покрытием «hard»</Desc>
						</FeaturesElement>
					</OurFeatures>
				</DescriptionContainer>
			</AboutUsContainer>
		</>
	)
}
