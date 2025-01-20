import {
	ContainerButtonToPlayVideo,
	ContainerButtonToPlayVideoText,
	ContainerForImage,
	ServicesCard,
	ServicesContainers,
	ContainerContent,
	ButtonToPlay,
	ToPlayImg,
	ContainerName,
	ToPngContainer,
	ServicesDesc,
} from './Style.HeaderDescription'

export const HeaderDescription = () => {
	return (
		<ContainerForImage>
			<ContainerContent>
				<ContainerName>
					Петербургский теннисный клуб имени М.А. Пасечникова
				</ContainerName>
				<ContainerButtonToPlayVideo>
					<ButtonToPlay>
						<ToPlayImg></ToPlayImg>
					</ButtonToPlay>
					<ContainerButtonToPlayVideoText>
						Посмотрите видео о нашем клубе
					</ContainerButtonToPlayVideoText>
				</ContainerButtonToPlayVideo>
				<ServicesContainers>
					<ServicesCard>
						<div>Услуги</div>
						<ServicesDesc>
							<div>Расписание</div>
							<ToPngContainer></ToPngContainer>
						</ServicesDesc>
					</ServicesCard>
					<ServicesCard>
						<div>Услуги</div>
						<ServicesDesc>
							<div>Аренда корта</div>
							<ToPngContainer></ToPngContainer>
						</ServicesDesc>
					</ServicesCard>
					<ServicesCard>
						<div>Услуги</div>
						<ServicesDesc>
							<div>Детский теннис</div>
							<ToPngContainer></ToPngContainer>
						</ServicesDesc>
					</ServicesCard>
					<ServicesCard>
						<div>Услуги</div>
						<ServicesDesc>
							<div>Сборы команд</div>
							<ToPngContainer></ToPngContainer>
						</ServicesDesc>
					</ServicesCard>
				</ServicesContainers>
			</ContainerContent>
		</ContainerForImage>
	)
}
