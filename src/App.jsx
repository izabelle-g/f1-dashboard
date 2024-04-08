import Login from './components/Login.jsx'
import Dashboard from './components/Dashboard.jsx'
import { useState } from 'react'
import './App.css'

function App() {
  const [screen, setScreen] = useState(["login"]);

  const changeScreen = (page) => {
    setScreen(page);
  };
  
  if(screen == "login") return <Login update={ changeScreen }/>
  else if(screen == "toRegistration") return <Registration />
  else if(screen == "toDashboard") return <Dashboard />
}

export default App
