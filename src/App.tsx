import { Route, Routes } from 'react-router-dom'
import { SignUp } from './pages/SignUp/SignUp'
import { FormSteps } from './pages/FormSteps/FormSteps'
import { FinishRegister } from './pages/FinishRegister/FinishRegister'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignUp/>}></Route>
        <Route path="/register" element={<FormSteps/>}></Route>
        <Route path="/finish" element={<FinishRegister/>}></Route>
      </Routes>
    </div>
  )
}

export default App
