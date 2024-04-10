import { ICard } from '../../entites/card/card.interface'

export const getFromLS = () => {
	const cities = localStorage.getItem('cities')

	const cards: ICard[] = cities ? JSON.parse(cities) : []
	console.log(cards)

	return { cards }
}
