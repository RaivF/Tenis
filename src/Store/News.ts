// src/redux/videoSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { initialStateType } from '../types/types'

const initialState: initialStateType = {
	News: [],
}

const NewsReducer = createSlice({
	name: 'news',
	initialState,
	reducers: {
		getNewNews(state, action: PayloadAction<string[]>) {
			state.News = action.payload
		},
	},
})

export const { getNewNews } = NewsReducer.actions
export default NewsReducer.reducer
