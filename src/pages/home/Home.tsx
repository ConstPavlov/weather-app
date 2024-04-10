import React, { FC } from 'react'
import { Weather } from '../../widgets'

import styles from './Home.module.scss'

const Home: FC = () => {
	return (
		<div className={styles.home}>
			<h1 className={styles.title}>Добро пожаловать!</h1>
			<Weather />
		</div>
	)
}

export default Home
