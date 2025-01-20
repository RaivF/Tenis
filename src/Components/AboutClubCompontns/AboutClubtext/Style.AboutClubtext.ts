import styled from 'styled-components'
const img = '/15.png'

const FourImg = '/four.png'
const ThreeImg = '/three.png'
const sevenImg = '/seven.png'

export const AboutUsContainer = styled.div`
	max-width: 70%;
	margin: 100px auto;
	display: flex;
	align-items: center;
`
export const ImgContainer = styled.div`
	width: 526px;
	height: 514px;
	background-image: url(${img});
	background-repeat: no-repeat;
	z-index: 1;
`
export const DescriptionContainer = styled.div`
	max-width: 856px;
	display: flex;
	flex-direction: column;
	height: 654px;
	justify-content: space-around;
	background-color: #f7ece1;
	padding: 45px 0 45px 100px;
	position: relative;
	left: -70px;
	z-index: -1;
`

export const Title = styled.div``
export const Text = styled.div``
export const Text2 = styled.div``
export const TitleDescriptionElement = styled.div``
export const DescriptionElement = styled.div``

export const OurFeatures = styled.div`
	display: flex;
`
export const FeaturesElement = styled.div`
	display: flex;
`
export const CountFeatures = styled.div`
	margin: 0 10px 0 0;
`
export const Desc = styled.div``

export const Seven = styled.div`
	width: 30px;
	height: 45px;
	background-image: url(${sevenImg});
`
export const Four = styled.div`
	width: 30px;
	height: 45px;
	background-image: url(${FourImg});
`
export const Three = styled.div`
	width: 30px;
	height: 45px;
	background-image: url(${ThreeImg});
`
