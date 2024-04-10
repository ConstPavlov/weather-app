import React from 'react'
import { Link } from 'react-router-dom'
import { HOME_ROUTE } from '../../app/router/consts'
import styles from './LinkHome.module.scss'

const LinkHome = () => {
	return (
		<Link className={styles.link} to={HOME_ROUTE}>
			Начать
		</Link>
	)
}

export default LinkHome
