import styled from 'styled-components'
const img = '/4.png'

export const AboutUsContainer = styled.div`
	max-width: 60%;
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
	max-width: 636px;
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
