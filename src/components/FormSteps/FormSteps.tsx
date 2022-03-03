import { useState } from 'react'
import { UiButton } from '../UiButton/UiButton'
import { Stepper } from '../Stepper/Stepper'
import { HubForm } from '../HubForm/HubForm'
import { ObjectivesForm } from '../ObjectivesForm/ObjectivesForm'
import { ReactComponent as LogoIcon } from '../../assets/icons/logo.svg'
import styles from './FormSteps.module.css'

export const FormSteps = (): JSX.Element => {
  const [current, setCurrent] = useState(0)

  const formList = [
    <HubForm/>,
    <ObjectivesForm/>
  ]

  const incrementCurrent = () => {
    if (current < formList.length - 1) {
      setCurrent(current + 1)
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
        <UiButton onClick={incrementCurrent}>Next</UiButton>
      </div>
    </div>
  )
}
