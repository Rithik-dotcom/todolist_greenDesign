import React, { useContext } from 'react'
import Nav from '../Components/Navbar/Nav';
import Footer from '../Components/Footer/Footer';
import App from '../App';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from "react-router-dom";
import Signup from '../Forms/SignUp/Signup';
import { UserContext } from '../Context/UserContext/Usercontext';


const Parent = () => {
const {loggedIn} = useContext(UserContext);
console.log(loggedIn)

    return (
        <div>
              <Nav />
            <BrowserRouter>
            {loggedIn ? <Routes>
                    <Route path='/' element={<App />} />
                    <Route path='/signup' element={<Signup />} />
                    <Route path='*' element={<h1>Not Found</h1>} />
                </Routes>:
                <Routes>
                    <Route path='*' element={<Signup />} />
                </Routes> }
                
            </BrowserRouter>
            <Footer />
        </div>
    )
}

export default Parent