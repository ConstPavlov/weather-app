import React, { FC, FormEvent, useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { CustomButton, useOutside } from '../../shared'
import { handleModalClick } from '../helpers/handlerClickModal'
import { fetchCities } from '../store/cities/asyncAction'
import { RootState, useAppDispatch } from '../store/store'
import styles from './NewCara.module.scss'

const NewCard: FC = () => {
	const dispatch = useAppDispatch()
	const [city, setCity] = useState<string>('')
	const { currentCard, status } = useSelector(
		(state: RootState) => state.cities
	)
	const { isShow, setIsShow, ref } = useOutside(false)
	const openWindow = () => {
		setIsShow(!isShow)
	}

	useEffect(() => {
		if (status === 'error') {
			alert('Впишите пожалуйста корректный город')
		}
		if (status === 'success') {
			alert('Поздравляем, вы добавили новый город!')
		}
	}, [status])

	const addNewPost = useCallback(
		(e: FormEvent<HTMLFormElement>) => {
			try {
				console.log(city)
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
			<CustomButton ref={ref} onClick={openWindow}>
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
								onChange={(e: any) => setCity(e.target.value)}
								value={city}
								type='text'
								placeholder='Название города'
								className={styles.input}
							/>
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
