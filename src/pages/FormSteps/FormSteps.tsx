import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UiButton } from '../../components/UiButton/UiButton'
import { Stepper } from '../../components/Stepper/Stepper'
import { HubForm } from '../../components/HubForm/HubForm'
import { ProfileForm } from '../../components/ProfileForm/ProfileForm'
import { ObjectivesForm } from '../../components/ObjectivesForm/ObjectivesForm'
import { ReactComponent as LogoIcon } from '../../assets/icons/logo.svg'
import styles from './FormSteps.module.css'

export const FormSteps = (): JSX.Element => {
  const navigate = useNavigate()
  const [current, setCurrent] = useState(0)

  const formList = [
    <HubForm/>,
    <ObjectivesForm/>,
    <ProfileForm/>
  ]

  const nextStep = () => {
    if (current < formList.length - 1) {
      setCurrent(current + 1)
    } else {
      navigate('/finish')
    }
  }

  return (
    <div className={styles.wrapper}>
      <LogoIcon className={styles.logo}/>

      <Stepper current={current}/>

      <div className={styles.body}>
        {formList[current]}        
      </div>

      <div className={styles.actions}>
        {current > 0 && <UiButton
          outlined
          className={styles.button}
          onClick={() => setCurrent(current - 1)}
        >Back</UiButton>}
        <UiButton onClick={nextStep}>Next</UiButton>
      </div>
    </div>
  )
}
