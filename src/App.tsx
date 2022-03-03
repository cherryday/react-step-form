import { SignUp } from './components/SignUp/SignUp'
import { FormSteps } from './components/FormSteps/FormSteps'
import styles from './App.module.css'
import { FinishRegister } from './components/FinishRegister/FinishRegister'

function App() {
  return (
    <div className={styles.app}>
      <SignUp/>
      <FormSteps/>
      <FinishRegister/>
    </div>
  );
}

export default App;
