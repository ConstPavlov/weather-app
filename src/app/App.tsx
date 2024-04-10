import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../widgets'
import './scss/app.scss'
import './scss/_variables.scss'

function App() {
	return (
		<div className='App'>
			<Header />
			<Outlet />
		</div>
	)
}

export default App
