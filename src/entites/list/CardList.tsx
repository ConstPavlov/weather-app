import styles from './CardList.module.scss'
import React, { FC, useCallback, useEffect, useRef } from 'react'
import { ICard } from '../card/card.interface'
import Card from '../card/Card'
import { removeCard } from '../../features/store/cities/slice'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { RootState } from '../../features/store/store'

const CardList: FC = () => {
	const { cards } = useSelector((state: RootState) => state.cities)
	const dispatch = useDispatch()
	const isMounted = useRef(false)

	useEffect(() => {
		if (isMounted.current) {
			const jsonObj = JSON.stringify(cards)
			localStorage.setItem('cities', jsonObj)
		}
		isMounted.current = true
	}, [cards])

	const removeOne = useCallback(
		(id: number) => {
			if (window.confirm('Ты действительно хочешь удалить город?'))
				dispatch(removeCard(id))
		},
		[cards]
	)
	if (cards.length === 0) {
		return (
			<h2 className={styles.empty}>Сейчас тут пусто, добавьте новый город</h2>
		)
	}
	return (
		<div className={styles.list}>
			{cards &&
				cards.map((card: ICard) => (
					<Card
						key={card.id}
						card={card}
						deleteCard={(id: number) => removeOne(card.id)}
					/>
				))}
		</div>
	)
}

export default CardList
