import React, { FC, FormEvent, useCallback, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { CustomButton, useOutside } from '../../shared'
import { handleModalClick } from '../helpers/handlerClickModal'
import { fetchCities } from '../store/cities/asyncAction'
import { RootState, useAppDispatch } from '../store/store'
import styles from './NewCara.module.scss'
import { alertsByStatus } from '../alerts/alertsByStatus'
import { useInputCity } from '../hooks/useInputCity'

const NewCard: FC = () => {
	const dispatch = useAppDispatch()
	const { currentCard, status, cards } = useSelector(
		(state: RootState) => state.cities
	)
	const {
		handleChangeInput,
		handleClickSelectObj,
		city,
		isSelect,
		resultsNames,
		setCity
	} = useInputCity(cards)
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
						<div className={styles.control} onClick={handleModalClick}>
							<input
								ref={inputEl}
								onInput={(e: any) => handleChangeInput(e.target.value)}
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
