import { ReactNode } from 'react'
import cn from 'classnames'
import styles  from './UiInput.module.css'

interface UiInputProps {
  icon: ReactNode
  placeholder?: string
  classNames?: string
}

export const UiInput = ({ icon, placeholder, classNames }: UiInputProps): JSX.Element => {
  return (
    <div className={cn(styles.wrapper, classNames)}>
      <div className={styles.icon}>
        {icon}
      </div>
      <input
        type="text"
        placeholder={placeholder}
        className={styles.input}
      />
    </div>
  )
}
