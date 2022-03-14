import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Login from './views/auth/Login';
import Signup from './views/auth/Signup';
import Logout from './views/auth/Logout';
import './App.css';
import Dashboard from './views/app/Dashboard';

const App = () => {
  
  return(
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/login' element={<Login/>} exact />
          <Route path='/signup' element={<Signup/>} exact />
          <Route path='/logout' element={<Logout/>} extact/>
          <Route path='/dashboard' element={<Dashboard/>} exact/>
        </Routes>
      </Router>
    </div>
  ) 
}
export default App;