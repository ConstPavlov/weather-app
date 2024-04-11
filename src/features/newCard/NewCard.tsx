import React, {
	FC,
	FormEvent,
	useCallback,
	useEffect,
	useMemo,
	useRef,
	useState
} from 'react'
import { useSelector } from 'react-redux'
import { CustomButton, useOutside } from '../../shared'
import { handleModalClick } from '../helpers/handlerClickModal'
import { fetchCities } from '../store/cities/asyncAction'
import { RootState, useAppDispatch } from '../store/store'
import { queryFilter } from '../utils/queryFilter'
import styles from './NewCara.module.scss'
import debounce from 'lodash/debounce'
import { alertsByStatus } from '../alerts/alertsByStatus'

const NewCard: FC = () => {
	const dispatch = useAppDispatch()
	const [city, setCity] = useState<string>('')
	const [isSelect, setIsSelect] = useState<boolean>(false)
	const [resultsNames, setResultsNames] = useState<string[]>([])
	const { currentCard, status, cards } = useSelector(
		(state: RootState) => state.cities
	)
	const inputEl = useRef<HTMLInputElement>(null)
	const { isShow, setIsShow, ref } = useOutside(false)

	useEffect(() => {
		alertsByStatus(status)
	}, [status])

	useEffect(() => {
		if (isShow && inputEl.current) {
			inputEl.current.focus()
		}
	}, [isShow])

	const addNewPost = useCallback(
		(e: FormEvent<HTMLFormElement>) => {
			try {
				e.preventDefault()
				const fetching = async () => {
					dispatch(fetchCities(city))
				}
				fetching()
				setIsShow(false)
				setCity('')
			} catch (error) {
				alert('Что-то пошло не так')
			}
		},
		[dispatch, city, currentCard]
	)

	const handleClickSelectObj = useCallback((value: string) => {
		setCity(value)
		setIsSelect(false)
	}, [])

	const onInputInputHandler = useMemo(
		() =>
			debounce((e: any) => {
				const value = e.target.value
				setIsSelect(true)
				if (value.length < 2) return
				const result = queryFilter(value, cards)
				if (result) {
					setResultsNames(result)
				}
			}, 1000),
		[]
	)

	return (
		<div className={styles.block}>
			<CustomButton ref={ref} onClick={() => setIsShow(!isShow)}>
				Создать город
			</CustomButton>
			<div
				className={
					isShow
						? `${styles.form_wrapper} ${styles.active}`
						: styles.form_wrapper
				}
			>
				{isShow && (
					<form className={styles.form} onSubmit={addNewPost}>
						{/*Управляемый  компонент */}
						<div className={styles.control} onClick={handleModalClick}>
							<input
								ref={inputEl}
								onInput={onInputInputHandler}
								onChange={(e: any) => setCity(e.target.value)}
								value={city}
								type='text'
								placeholder='Название города'
								className={styles.input}
							/>
							{isSelect && city && resultsNames.length > 0 && (
								<div className={styles.namesBlock}>
									<ul className={styles.namesUl}>
										{resultsNames.map((res, i) => (
											<li
												className={styles.namesLi}
												key={i}
												onClick={() => handleClickSelectObj(res)}
											>
												{res}
											</li>
										))}
									</ul>
								</div>
							)}
							<p className={styles.tooltip}>Введите пожалуйста город...</p>
							<CustomButton type='submit'>Добавить</CustomButton>
						</div>
					</form>
				)}
			</div>
		</div>
	)
}

export default NewCard
