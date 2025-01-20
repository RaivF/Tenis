// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit'
import NewsReducer from './News'

export const store = configureStore({
	reducer: {
		news: NewsReducer,
	},
})

export type Store = ReturnType<typeof store.getState>
