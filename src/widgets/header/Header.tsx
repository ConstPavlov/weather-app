import React from 'react'
import NavLinks from '../../features/nav/NavLinks'
import { Logo } from '../../shared'
import styles from './Header.module.scss'

const Header = () => {
	return (
		<div className={styles.header}>
			<Logo />
			<NavLinks />
		</div>
	)
}

export default Header
