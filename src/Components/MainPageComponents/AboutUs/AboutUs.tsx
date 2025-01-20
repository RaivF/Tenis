import {
	AboutUsContainer,
	ImgContainer,
	DescriptionContainer,
	Title,
	Text,
	TitleDescriptionElement,
	DescriptionElement,
	Text2,
} from './Style.AboutUs'

export const AboutUs = () => {
	return (
		<>
			<AboutUsContainer>
				<ImgContainer></ImgContainer>
				<DescriptionContainer>
					<Title>Спортивный клуб</Title>
					<Text>
						Imperdiet lorem ipsum, pulvinar aliquet sit ultricies in sit turpis.
						Ultricies erat pretium risus quam tincidunt non viverra porttitor.
						Sollicitudin enim nunc in nisi donec vel. Blandit mauris vitae amet
						aliquet ultrices mauris pellentesque. Non ipsum commodo, sit mi sit
						netus aenean nisl. Donec sit pellentesque enim, vestibulum.{' '}
					</Text>
					<Text2>
						Condimentum hac adipiscing purus in augue nisi. Convallis ut nisi.
					</Text2>
					<TitleDescriptionElement>
						Ornare orci ut dictum nulla fames.
					</TitleDescriptionElement>
					<DescriptionElement>
						Euismod diam, vel venenatis bibendum sodales sem hendrerit vulputate
						sagittis.{' '}
					</DescriptionElement>
					<DescriptionElement>
						Nisl senectus sed malesuada donec. Interdum malesuada bibendum
						imperdiet elementum auctor vitae in.{' '}
					</DescriptionElement>
					<DescriptionElement>
						Quam purus ornare dictum pharetra. Sed viverra tellus sollicitudin
						urna, sagittis.{' '}
					</DescriptionElement>
					<DescriptionElement>
						Scelerisque urna senectus commodo, nam. Donec nibh tempus imperdiet
						nisi, tincidunt mus egestas nisl nullam.
					</DescriptionElement>
				</DescriptionContainer>
			</AboutUsContainer>
		</>
	)
}
