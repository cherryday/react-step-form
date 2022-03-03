import { Route, Routes } from 'react-router-dom';
import { SignUp } from './pages/SignUp/SignUp'
import { FormSteps } from './pages/FormSteps/FormSteps'
import { FinishRegister } from './pages/FinishRegister/FinishRegister'
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.app}>
      <Routes>
        <Route path="/" element={<SignUp/>}></Route>
        <Route path="/register" element={<FormSteps/>}></Route>
        <Route path="/finish" element={<FinishRegister/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
