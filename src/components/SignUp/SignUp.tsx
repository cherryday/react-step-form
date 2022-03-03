import { UiButton } from '../UiButton/UiButton'
import { ReactComponent as LogoIcon } from '../../assets/icons/logo.svg'
import styles from './SignUp.module.css'

export const SignUp = (): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
      </div>
      <div className={styles.right}>
        <LogoIcon className={styles.logo}/>
        <h1 className={styles.title}>Create Account</h1>
        <p className={styles.subtitle}>Please register your account!</p>
        <UiButton>Create Account</UiButton>
        <div className={styles.footer}>
          <p className={styles.text}>Already have an Account?</p>
          <a href="#" className={styles.link}>Sign In</a>
        </div>
      </div>
    </div>
  )
}
