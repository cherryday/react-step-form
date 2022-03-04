import { Link } from 'react-router-dom'
import cn from 'classnames'
import { UiButton } from '../../components/UiButton/UiButton'
import { ReactComponent as LogoIcon } from '../../assets/icons/logo.svg'
import styles from './SignUp.module.css'

export const SignUp = (): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
      </div>
      <div className={styles.right}>
        <LogoIcon className={styles.logo}/>
        <h1 className={cn(styles.title, 'h1')}>Create Account</h1>
        <p className={styles.subtitle}>Please register your account!</p>
        <Link to="/register">
          <UiButton>Create Account</UiButton>
        </Link>
        <div className={styles.footer}>
          <p className={styles.text}>Already have an Account?</p>
          <a href="/" className={styles.link}>Sign In</a>
        </div>
      </div>
    </div>
  )
}
