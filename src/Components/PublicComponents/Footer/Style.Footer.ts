import styled from 'styled-components'
const YouTubeImg = '/9.png'
const VKImg = '/11.png'
const TGImg = '/8.png'

export const HeaderMainContainer = styled.div`
	height: 70px;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	border-bottom: 1px solid silver;
	background-color: #f7ece1;
`

export const LogoContainer = styled.div`
	font-size: 14px;
	color: #9f9e9e;
`

export const MenuContainer = styled.div`
	width: 45%;
	display: flex;
	justify-content: space-between;
	font-size: 14px;
`

export const SocialNetwork = styled.div`
	width: 150px;
	display: flex;
	justify-content: space-between;
`

export const YouTube = styled.div`
	width: 36px;
	height: 36px;
	background-image: url(${YouTubeImg});
`

export const VK = styled.div`
	width: 36px;
	height: 36px;
	background-image: url(${VKImg});
`
export const TG = styled.div`
	width: 36px;
	height: 36px;
	background-image: url(${TGImg});
`
