type TypeName = {
	city: string
}
export const queryFilter = (value: string, array: TypeName[]) => {
	const listNames = array ? array.map((card) => card.city) : []
	if (listNames.length === 0) {
		return
	}
	console.log(listNames)
	const regex = new RegExp(value, 'i')
	const matched: string[] = listNames.filter((item) => {
		if (regex.test(item)) {
			return true
		} else {
			return false
		}
	})
	return matched
}
