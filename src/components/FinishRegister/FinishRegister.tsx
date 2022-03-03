import { ReactComponent as LogoIcon } from '../../assets/icons/logo.svg'
import GgImg from '../../assets/images/gg.png'
import { UiButton } from '../UiButton/UiButton'

import styles from './FinishRegister.module.css'

export const FinishRegister = (): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <LogoIcon className={styles.logo}/>
        <img
          src={GgImg}
          alt="gg"
          className={styles.gg}
        />
        <h1 className={styles.title}>Finish Your Registration</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <h3 className={styles.subtitle}>Why Connect My Google Account?</h3>
        <p className={styles.text}>Your contact and calendar data helps us schedule meetings and ensure that your matches are relevant (not matching you with people you already know, for instance).</p>
        <p className={styles.text}>We’re serious about your privacy and will never share your private data with other users or third parties without your consent.</p>
        <UiButton className={styles.button}>Finish Sign Up With Google</UiButton>
      </div>
    </div>
  )
}
