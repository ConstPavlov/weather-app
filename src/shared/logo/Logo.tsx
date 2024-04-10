import React from 'react'
import { Link } from 'react-router-dom'
import logoIco from '../../app/assets/logo-ico.svg'
import styles from './Logo.module.scss'

const Logo = () => {
	return (
		<Link to='/'>
			<div className={styles.logo}>
				<h2 className={styles.title}>Погода с любовью</h2>
				<img className={styles.img} src={logoIco} alt='ico weather' />
			</div>
		</Link>
	)
}

export default Logo
