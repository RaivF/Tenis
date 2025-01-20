import styled from 'styled-components'
const img = '/1.png'

export const CardContainer = styled.div`
	width: 416px;
	height: 500px;
	border: 1px solid silver;
	display: flex;
	align-items: center;
	margin: 0 15px 0 15px;
`
export const ContainerBGImg = styled.div`
	height: 90%;
	width: 90%;
	background-repeat: no-repeat;
	margin: 0 auto;
	background-image: url(${img});
	display: flex;
	color: white;
	font-size: 27px;
	align-items: flex-end;
	justify-content: center;
`
export const TextContainer = styled.div`
	max-width: 85%;
	margin-bottom: 50px;
`
