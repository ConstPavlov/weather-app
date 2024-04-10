import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'

type TypeOut = {
	ref: any
	isShow: boolean
	setIsShow: Dispatch<SetStateAction<boolean>>
}
export const useOutside = (initialState: boolean): TypeOut => {
	const [isShow, setIsShow] = useState(initialState)

	const ref = useRef<HTMLElement>(null)

	const handleClickOutside = (e: any) => {
		if (ref.current && !ref.current.contains(e.target)) {
			setIsShow(false)
		} else return
	}

	useEffect(() => {
		document.addEventListener('click', handleClickOutside)

		return () => {
			document.removeEventListener('click', handleClickOutside)
		}
	}, [])

	return { isShow, setIsShow, ref }
}
