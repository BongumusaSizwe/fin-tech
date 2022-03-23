import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import MyNavbar from './components/layout/Navbar';
import Login from './views/auth/Login';
import Signup from './views/auth/Signup';
import Logout from './views/auth/Logout';
import './App.css';
import Dashboard from './views/app/Dashboard';
import MySidebar from './components/layout/MySidebar'
import CustomerCard from './components/customer/CustomerCard';
import CustomerProfile from './components/customer/CustomerProfile';


const App = () => {
  
  return(
    <div className='App'>
      <Router>
        <MySidebar />
        <Routes>
          <Route path='/login' element={<Login/>} exact />
          <Route path='/signup' element={<Signup/>} exact />
          <Route path='/logout' element={<Logout/>} extact/>
          <Route path='/dashboard' element={<Dashboard/>} exact/>
          <Route path='/sidebar' element={<MySidebar/>} exact/>
          <Route path='/customers' element={<CustomerCard/>}  exact/>
          <Route path='/customerprofile/:email' element = {<CustomerProfile/>}/>
        </Routes>
      </Router>
    </div>
  ) 
}
export default App;