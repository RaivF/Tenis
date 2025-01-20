import styled from 'styled-components'
const GalleryContainerImg = '/14.png'
const imgLeftArrow = '/left.png'

export const PriceServicesContainer = styled.div`
	margin: 100px auto;
	display: flex;
	justify-content: center;
`

export const PriceContainer = styled.div``
export const Title = styled.div`
	font-size: 36px;
	margin-bottom: 100px;
`
export const PriceContainerElement = styled.div`
	width: 600px;
	height: 60px;
	background-color: #8d86c9;
	font-size: 21px;
	color: white;
	margin-top: 30px;
	display: flex;
	align-items: center;
	position: relative;
`
export const PriceContainerText = styled.div`
	font-size: 21px;
	color: white;
	margin-left: 20px;
`
export const PriceImgContainerLeft = styled.div`
	width: 20px;
	height: 15px;
	background-image: url(${imgLeftArrow});
	background-repeat: no-repeat;
	position: absolute;
	right: 30px;
`

export const ServicesContainer = styled.div``
export const HeadServices = styled.div`
	display: flex;
	justify-content: space-between;
`
export const GalleryContainer = styled.div`
	width: 1296px;
	height: 500px;
	border: 1px solid silver;
	display: flex;
	justify-content: center;
	align-items: center;
`
export const GalleryImg = styled.div`
	width: 1256px;
	height: 450px;
	background-image: url(${GalleryContainerImg});
	position: relative;
`
export const GalleryImgDesc = styled.div`
	width: 200px;
	height: 40px;
	font-size: 27px;
	color: white;
	position: absolute;
	bottom: 10px;
	left: 30px;
`
