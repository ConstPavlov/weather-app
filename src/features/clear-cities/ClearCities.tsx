import styles from './ClearCities.module.scss'
import { useDispatch } from 'react-redux'
import { removeAll } from '../store/cities/slice'
import { CustomButton } from '../../shared'
import { FC } from 'react'

const ClearCities: FC = () => {
	const dispatch = useDispatch()

	const clearAll = (e: any) => {
		e.preventDefault()
		dispatch(removeAll())
	}
	return <CustomButton onClick={clearAll}>Удалить все</CustomButton>
}

export default ClearCities
