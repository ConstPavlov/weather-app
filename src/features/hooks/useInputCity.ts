import { debounce } from 'lodash'
import { useCallback, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { ICard } from '../../entites'
import { RootState } from '../store/store'
import { queryFilter } from '../utils/queryFilter'

export const useInputCity = (cards: ICard[]) => {
	const [city, setCity] = useState<string>('')
	const [isSelect, setIsSelect] = useState<boolean>(false)
	const [resultsNames, setResultsNames] = useState<string[]>([])
	const handleClickSelectObj = useCallback((value: string) => {
		setCity(value)
		setIsSelect(false)
	}, [])

	const onInputInputHandler = useMemo(
		() =>
			debounce((value: string) => {
				setIsSelect(true)
				if (value.length < 2) return
				const result = queryFilter(value, cards)
				if (result) {
					setResultsNames(result)
				}
			}, 1000),
		[cards]
	)

	const handleChangeInput = (value: string) => {
		setCity(value)
		setIsSelect(false)
		onInputInputHandler(value)
	}

	return {
		handleChangeInput,
		handleClickSelectObj,
		city,
		setCity,
		isSelect,
		resultsNames
	}
}
