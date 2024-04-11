import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { ICard } from '../../../entites/card/card.interface'
import { REACT_APP_API_KEY, REACT_APP_API_URL } from '../consts/consts'

export const fetchCities = createAsyncThunk(
	'cities/fetchCities',
	async (city: string) => {
		const response = await axios.get(
			`${REACT_APP_API_URL}/data/2.5/weather?q=${city}&cnt=5&appid=${REACT_APP_API_KEY}`
		)

		const data = await response.data
		const weatherInfo = data.weather[0].description
		const codIMG = data.weather[0].icon
		const list = data.list
		console.log(list)
		const cityObj: ICard | null = {
			id: Math.random(),
			city: data.name,
			temperature: Math.round(data.main.temp - 273.15),
			weather: weatherInfo,
			wind: data.wind.speed,
			iconUrl: `https://openweathermap.org/img/wn/${codIMG}@2x.png`
		}
		console.log(cityObj)
		console.log(weatherInfo)

		return cityObj
	}
)

// `https://api.openweathermap.org/data/2.5/weather?q=Moscow&appid=a2b237a6cdbe465abb9b515dc672036`
