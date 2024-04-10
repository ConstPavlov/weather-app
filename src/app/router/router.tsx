import React from 'react'
import { Provider } from 'react-redux'
import { createBrowserRouter } from 'react-router-dom'
import { store } from '../../features'
import About from '../../pages/about/About'
import Home from '../../pages/home/Home'
import App from '../App'

export const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<Provider store={store}>
				<App />
			</Provider>
		),
		children: [
			{
				path: '/about',
				element: <About />
			},
			{
				path: '/',
				element: <Home />
			}
		]
	}
])
