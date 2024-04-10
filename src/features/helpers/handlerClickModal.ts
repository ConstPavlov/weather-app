export const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
	e.stopPropagation() // Предотвращаем всплытие клика до родительских элементов
}
