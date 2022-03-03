import { ReactNode } from 'react'
import cn from 'classnames'
import styles from './UiButton.module.css'

interface UiButtonProps {
  children: ReactNode
  outlined?: boolean
  icon?: ReactNode
  className?: string
  onClick?: () => void
}

export const UiButton = ({ children, outlined, className, onClick }: UiButtonProps): JSX.Element => {
  return (
    <button onClick={onClick} className={cn(styles.button, className, {
      [styles.outlined]: outlined
    })}>
      {children}
    </button>
  )
}
