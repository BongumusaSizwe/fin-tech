import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './views/auth/Login';
import Signup from './views/auth/Signup';
import Logout from './views/auth/Logout';
import './App.css';
import Dashboard from './views/app/Dashboard';
import MySidebar from './components/layout/MySidebar'
import CustomerCard from './components/customer/CustomerCard';
import CustomerProfile from './components/customer/CustomerProfile';
import StepOne from './views/app/CustomerForm/StepOne';
import StepTwo from './views/app/CustomerForm/StepTwo';
import StepThree from './views/app/CustomerForm/StepThree';
import Final from './views/app/CustomerForm/Final';
import Layout from './components/layout/Layout';

const App = () => {

    return (
        <div className='App'>
            <Router>
                <Layout />
                <Routes>
                    <Route path='/sidebar' element={<MySidebar />} exact />
                    <Route path='/login' element={<Login />} exact />
                    <Route path='/signup' element={<Signup />} exact />
                    <Route path='/logout' element={<Logout />} extact />
                    {/* <Route path='/dashboard' element={<Dashboard />} exact /> */}
                    {/* <Route path='/sidebar' element={<MySidebar />} exact /> */}
                    <Route path='/customers' element={<CustomerCard />} exact />
                    <Route path='/thankyou' element={<Final />} exact />
                    <Route path='/stepthree' element={<StepThree />} exact />
                    <Route path='/steptwo' element={<StepTwo />} exact />
                    <Route path='/stepone' element={<StepOne />} exact />
                    <Route path='/customerprofile/:email' element={<CustomerProfile />} />
                </Routes>
            </Router>
        </div>
    )
}
export default App;