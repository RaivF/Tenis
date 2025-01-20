import styled from 'styled-components'
const imgLeftArrow = '/left.png'
const imgRightArrow = '/right.png'

export const ControlButtonContainer = styled.div`
	width: 105px;
	height: 45px;
	display: flex;
	justify-content: space-between;
`

export const Left = styled.div`
	width: 45px;
	height: 45px;
	background-color: #8d86c9;
	display: flex;
	background-repeat: no-repeat;
	justify-content: center;
	align-items: center;
`

export const Right = styled.div`
	width: 45px;
	height: 45px;
	background-color: #8d86c9;
	display: flex;
	justify-content: center;
	align-items: center;
`

export const ImgContainerLeft = styled.div`
	width: 20px;
	height: 15px;
	background-image: url(${imgLeftArrow});
	background-repeat: no-repeat;
`

export const ImgContainerRight = styled.div`
	width: 20px;
	height: 15px;
	background-image: url(${imgRightArrow});
	background-repeat: no-repeat;
`
