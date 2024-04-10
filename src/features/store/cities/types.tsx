import { ICard } from '../../../entites/card/card.interface'

export enum Status {
	LOADING = 'loading',
	ERROR = 'error',
	SUCCESS = 'success'
}

export interface ICitiesState {
	cards: ICard[]
	currentCard: ICard | null
	status: Status
}
