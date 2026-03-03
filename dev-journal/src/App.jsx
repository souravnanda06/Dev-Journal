import Login from './pages/login';
import Register from './pages/register';
import LandingPage from './pages/landing'
import Dashboard from './pages/dashboard'
import Create from './pages/Create-Entry';
import My_journal from './pages/my-Entries';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css'

function App() {
  

  return (
   <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<LandingPage/>} />
      <Route path = "/login" element = {<Login/>} />
      <Route path = "/register" element = {<Register/>} />
      <Route path = "/dashboard" element = {<Dashboard/>} />
      <Route path = "/create" element = {<Create/>} />
      <Route path = "/my-entries" element = {<My_journal/>} />
    </Routes>
   </BrowserRouter>
  )
}

export default App
