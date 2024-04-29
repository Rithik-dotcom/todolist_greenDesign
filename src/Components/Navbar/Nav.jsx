import React, { useContext } from 'react';
import '../../App.css';
import './Nav.css';
import { UserContext } from '../../Context/UserContext/Usercontext';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
  const customStyle = {
    '--bs-link-hover-color-rgb': '25, 135, 84',
    // Add other styles as needed
  };

  const Navigate = useNavigate();
  const { currentUser, setCurrentUser, loggedIn , setLoggedin} = useContext(UserContext);
  console.log(currentUser); //provides a string
  let obj = JSON.parse(currentUser);
  if(currentUser){
  // console.log(obj.firstName);
}

function handleSignout(){
  setLoggedin(false);
  Navigate('/');
  console.log(window.location.reload() )
  
}

  return (
    <div className=''>
      <nav class="main-div-nav navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand text-secondary fs-2 logo-font" href="#">Aprst</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="text-end " id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class=" text-end nav-item">
                <a class="nav-link active text-white" aria-current="page" href="/">Home</a>
              </li>
             {loggedIn ? <li class="nav-item">
                <button class="nav-link text-white"  onClick={handleSignout}>Sign Out</button>
              </li>: <li class="nav-item ">
                <a class="nav-link text-white icon-link icon-link-hover" style={customStyle} href="/signup">Signup/Login</a>
              </li>}

              <li class="nav-item">
                <a class="nav-link  text-black pointer" aria-disabled="true">  <i class="fs-5 bi bi-sliders"></i></a>
               
              </li>
            </ul>

          </div>

          {loggedIn && <div>
            <p className='text-black fs-5'> {`Welcome ${obj.firstName}`}</p>
          </div>}
        </div>
      </nav>
    </div>
  )
}

export default Nav