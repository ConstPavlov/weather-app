export { default as ClearCities } from './clear-cities/ClearCities'
export { default as NewCard } from './newCard/NewCard'
export { default as NavLinks } from './nav/NavLinks'
export { store } from '../features/store/store'
export {
	setCities,
	addCard,
	removeCard,
	removeAll
} from '../features/store/cities/slice'
// export { store } from './store/store'
export { fetchCities } from '../features/store/cities/asyncAction'
