import styled from 'styled-components'

const img = '/13.png'

export const ContainerForImage = styled.div`
	height: 270px;
	background-image: url(${img});
	display: flex;
	justify-content: flex-end;
	background-repeat: no-repeat;
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
	align-items: center;
	flex-direction: column;
	justify-content: space-between;
`

export const NameContainer = styled.div`
	color: white;
	font-size: 48px;
	max-width: 680px;
`

export const ContainerButtonToPlayVideo = styled.div`
	font-size: 18px;
	color: white;
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
	justify-content: center;
`
