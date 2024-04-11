export const alertsByStatus = (status: string) => {
	if (status === 'error') {
		alert('Впишите пожалуйста корректный город')
	}
	if (status === 'success') {
		alert('Поздравляем, вы добавили новый город!')
	}
}
