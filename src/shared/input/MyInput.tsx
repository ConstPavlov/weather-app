import React, {
	ChangeEvent,
	Dispatch,
	FC,
	ForwardedRef,
	forwardRef,
	InputHTMLAttributes,
	SetStateAction
} from 'react'
import styles from './MyInput.module.css'

// interface MyInputProps extends InputHTMLAttributes<HTMLInputElement> {
// 	onChange?: any
// }

const MyInput: FC = forwardRef<HTMLInputElement, any>((props, ref) => {
	const { className, onChange, ...rest } = props

	return (
		<input
			ref={ref}
			{...rest}
			className={styles.myInp}
			onChange={() => onChange()}
		/>
	)
})

export default MyInput
