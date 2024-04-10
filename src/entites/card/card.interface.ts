import { SetStateAction } from 'react'
import { DispatchProp } from 'react-redux'

export interface ICard {
	id: number
	city: string
	temperature: number
	weather: string
	wind: string
	iconUrl: string
}

export interface IcardProps {
	card: ICard
	deleteCard?: any
}

// DispatchProp<any>
