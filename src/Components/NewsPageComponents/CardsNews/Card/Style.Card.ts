import styled from 'styled-components'
const img = '/7.png'

export const CardContainer = styled.div`
	max-width: 416px;
	height: 512px;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	border: 1px solid silver;
	margin: 20px;
`
export const ImgContainer = styled.div`
	width: 100%;
`
export const Img = styled.div`
	width: 336px;
	height: 240px;
	background-image: url(${img});
	margin: 0 auto;
	background-repeat: no-repeat;
`
export const Date = styled.div`
	width: 80%;
	margin: 0 auto;
	color: #333333;
	font-size: 14px;
`

export const Description = styled.div`
	width: 80%;
	margin: 0 auto;
	font-size: 21px;
`
export const MoreButton = styled.div`
	background-color: #8d86c9;
	width: 137px;
	height: 45px;
	margin-left: 10%;
	display: flex;
	align-items: center;
	justify-content: center;
	color: white;
`
