import { useState } from 'react'
import cn from 'classnames'
import { CardLabel } from '../CardLabel/CardLabel'
import styles from './UiRadio.module.css'

interface UiRadioProps {
  src: string
  title: string
  name: string
  active: boolean
  onChange: () => void
}

export const UiRadio = ({ src, title, name, active, onChange }: UiRadioProps): JSX.Element => {
  return (
    <CardLabel src={src} title={title} active={active}>
      <div className={cn(styles.radio, {
        [styles.active]: active
      })}>
        <input
          type="radio"
          name={name}
          checked={active}
          className={styles.input}
          onChange={onChange}
        />
        <div className={styles.inner}></div>
      </div>
    </CardLabel>
  )
}
