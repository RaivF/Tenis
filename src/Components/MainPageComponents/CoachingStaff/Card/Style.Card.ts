import styled from 'styled-components'
const img = '/5.png'
export const CardContainer = styled.div`
	height: 350px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
`
export const ImgContainer = styled.div`
	width: 200px;
	height: 240px;
	border: 1px solid silver;
`
export const Img = styled.div`
	width: 166px;
	height: 240px;
	background-image: url(${img});
	margin: 0 auto;
`
export const Name = styled.div`
	width: 100px;
	text-align: center;
	margin: 0 auto;
	font-size: 21px;
`
export const Description = styled.div`
	max-width: 90%;
	text-align: center;
`
