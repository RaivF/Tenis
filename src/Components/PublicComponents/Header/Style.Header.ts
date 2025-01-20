import styled from 'styled-components'

const YouTubeImg = '/10.png'
const VKImg = '/12.png'
const LogoImg = '/logo.png'

export const HeaderMainContainer = styled.div`
	height: 70px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	border-bottom: 1px solid silver;
`

export const LogoContainer = styled.div`
	width: 153px;
	height: 46px;
	background-image: url(${LogoImg});
	cursor: pointer;
`

export const MenuContainer = styled.div`
	width: 45%;
	display: flex;
	justify-content: space-between;
	color: white;
	span {
		cursor: pointer;
	}
`

export const SocialNetwork = styled.div`
	width: 100px;
	display: flex;
	justify-content: space-between;
`

export const YouTube = styled.div`
	width: 36px;
	height: 36px;
	background-image: url(${YouTubeImg});
	cursor: pointer;
`

export const VK = styled.div`
	width: 36px;
	height: 36px;
	background-image: url(${VKImg});
	cursor: pointer;
`
