import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import React from 'react'
import { ICard } from '../../../entites/card/card.interface'
import { getFromLS } from '../../utils/getFromLS'
import { RootState } from '../store'
import { fetchCities } from './asyncAction'
import { ICitiesState, Status } from './types'

const { cards } = getFromLS()

const initialState: ICitiesState = {
	cards,
	currentCard: null,
	status: Status.LOADING
}

export const citiesSlice = createSlice({
	name: 'cities',
	initialState,
	reducers: {
		setCities: (state, action) => {
			state.cards = action.payload
		},
		addCard: (state, action: PayloadAction<any>) => {
			state.cards.push(action.payload)
		},
		removeCard: (state, action: PayloadAction<number>) => {
			state.cards = state.cards.filter(
				(card: any) => card.id !== action.payload
			)
		},
		removeAll: (state) => {
			state.cards = []
		}
	},
	extraReducers: (builder) => {
		builder.addCase(fetchCities.fulfilled, (state, action) => {
			state.currentCard = action.payload
			state.cards = [...state.cards, action.payload]
			state.status = Status.SUCCESS
			console.log(action, 'SUCCESS')
		})
		builder.addCase(fetchCities.pending, (state, action) => {
			state.currentCard = null
			state.status = Status.LOADING
			console.log(action, 'LOADING')
		})
		builder.addCase(fetchCities.rejected, (state, action) => {
			state.currentCard = null
			state.status = Status.ERROR
		})
	}
})

export const { setCities, addCard, removeCard, removeAll } = citiesSlice.actions

export default citiesSlice.reducer
