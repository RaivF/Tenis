const getVideos = async () => {
	const response = await fetch(`https://jsonplaceholder.typicode.com/photos`)

	if (!response.ok) {
		throw new Error('Failed to fetch videos')
	}

	const data: string[] = await response.json()

	return data
}

export const api = {
	getVideos,
}
