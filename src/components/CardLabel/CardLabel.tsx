import { ReactNode } from 'react'
import cn from 'classnames'
import styles from './CardLabel.module.css'

interface CardLabelProps {
  src: string
  title: string
  active: boolean
  children: ReactNode
}

export const CardLabel = ({ src, title, active, children }: CardLabelProps): JSX.Element => {
  return (
    <label className={cn(styles.wrapper, {
      [styles.active]: active
    })}>
      <div className={styles.img}>
        <img src={src} alt="img"/>
      </div>
      <p className={styles.title}>{title}</p>
      <div className={styles.control}>
        {children}
      </div>
    </label>
  )
}
