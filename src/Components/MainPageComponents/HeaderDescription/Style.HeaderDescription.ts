import styled from 'styled-components'

const img = '/BGHeader.png'
const playPng = '/play.png'
const ToPng = '/ToPng.png'

export const ContainerForImage = styled.div`
	height: 1000px;
	background-image: url(${img});
	display: flex;
	justify-content: flex-end;
	position: relative;
	top: -70px;
	z-index: -1;
	flex-direction: column;
`

export const ContainerContent = styled.div`
	width: 80%;
	height: 60%;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`
export const ToPngContainer = styled.div`
	width: 20px;
	height: 20px;
	background-image: url(${ToPng});
`
export const ServicesDesc = styled.div`
	display: flex;
	justify-content: space-between;
`

export const ContainerName = styled.div`
	width: 500px;
	color: white;
	font-size: 48px;
	max-width: 680px;
`

export const ContainerButtonToPlayVideo = styled.div`
	font-size: 18px;
	color: white;
	display: flex;
	align-items: center;
`
export const ContainerButtonToPlayVideoText = styled.div`
	width: 150px;
	font-size: 18px;
`
export const ButtonToPlay = styled.div`
	width: 64px;
	height: 64px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #8d86c9;
	border-radius: 50%;
	margin-right: 50px;
	padding: 10px;
	outline: 1px solid white;
	outline-offset: 10px;
`

export const ToPlayImg = styled.div`
	width: 16px;
	height: 20px;
	background-image: url(${playPng});
	background-repeat: no-repeat;
`

export const ServicesContainers = styled.div`
	display: flex;
	justify-content: space-between;
`

export const ServicesCard = styled.div`
	font-size: 24px;
	color: white;
	width: 300px;
	height: 150px;
	padding: 20px;

	display: flex;
	flex-direction: column;
	background-color: #8d86c9;
	justify-content: space-around;
`
