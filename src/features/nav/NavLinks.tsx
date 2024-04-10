import React from 'react'
import { Link } from 'react-router-dom'
import { ABOUT_ROUTE, HOME_ROUTE } from '../../app/router/consts'
import Button from '../../shared/button/CustomButton'
import styles from './NavLinks.module.scss'

const NavLinks = () => {
	return (
		<nav className={styles.nav}>
			<Link className={styles.link} to={HOME_ROUTE}>
				Домашняя
			</Link>
			<Link className={styles.link} to={ABOUT_ROUTE}>
				О нас
			</Link>
		</nav>
	)
}

export default NavLinks
