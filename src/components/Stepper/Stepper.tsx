import cn from 'classnames'
import { ReactComponent as LocationIcon } from '../../assets/icons/location.svg'
import { ReactComponent as CrownIcon } from '../../assets/icons/crown.svg'
import { ReactComponent as UserIcon } from '../../assets/icons/user.svg'
import { ReactComponent as HeartIcon } from '../../assets/icons/heart.svg'
import { ReactComponent as FrameIcon } from '../../assets/icons/frame.svg'
import styles from './Stepper.module.css'

interface StepperProps {
  current: number
}

export const Stepper = ({ current }: StepperProps): JSX.Element => {
  const stepIcons = [
    <LocationIcon/>,
    <CrownIcon/>,
    <FrameIcon/>,
    <HeartIcon/>,
    <UserIcon/>,
  ]

  return (
    <div className={styles.steps}>
        {stepIcons.map((icon, i) => {
          return <div
            key={i}
            className={cn(styles.step, {
              [styles.stepActive]: current >= i
            })}
          >{icon}</div>
        })}
      </div>
  )
}
