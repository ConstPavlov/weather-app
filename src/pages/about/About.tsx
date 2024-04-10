import React, { FC } from 'react'
import CustomButton from '../../shared/button/CustomButton'
import LinkHome from '../../shared/link/LinkHome'
import styles from './About.module.scss'

const About: FC = () => {
	return (
		<div className={styles.about}>
			<h1 className={styles.title}>About Page</h1>
			<p className={styles.desc}>
				Мы предоставляем сервис для отслеживания погоды <br />
				по всему миру, желаем вам приятного пользования <br /> нашего
				приложения!
			</p>
			<LinkHome />
		</div>
	)
}

export default About
