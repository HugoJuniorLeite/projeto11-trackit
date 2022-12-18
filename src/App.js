import LoginPage from "./pages/LoginPage/LoginPage"
import CreateAccountPage from "./pages/CreateAccountPage/CreateAccountPage"
import HomePage from "./pages/HomePage/HomePage"
import GoalDayPage from "./pages/GoalDayPage/GoalDayPage"
import HistoricGoalsPage from "./pages/HistoricGoalsPage/HistoricGoalsPage"
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {

  return (   
    <BrowserRouter>

    <Routes>

      <Route path="/" element={<LoginPage/>}/>
      <Route path="/cadastro" element={<CreateAccountPage/>}/>
      <Route path="/habitos" element={<HomePage/>}/>
      <Route path="/hoje" element={<GoalDayPage/>}/>
      <Route path="/historico" element={<HistoricGoalsPage/>}/>
 
      </Routes>

    </BrowserRouter>

    )
    }