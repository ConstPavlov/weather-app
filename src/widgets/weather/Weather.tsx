import React, { FC } from 'react'
import { CardList } from '../../entites'
import { ClearCities, NewCard } from '../../features'
import styles from './Weather.module.scss'

const Weather: FC = () => {
	return (
		<div className={styles.cities}>
			<h3 className={styles.title}>Погода</h3>
			<div className={styles.newCard}>
				<NewCard />
			</div>
			<CardList />
			<div className={styles.clear}>
				<ClearCities />
			</div>
		</div>
	)
}

export default Weather
