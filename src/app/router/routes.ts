import About from '../../pages/about/About'
import Home from '../../pages/home/Home'
import { ABOUT_ROUTE, HOME_ROUTE } from './consts'

export const routes = [
	{ path: HOME_ROUTE, Component: Home },
	{ path: ABOUT_ROUTE, Component: About }
]
