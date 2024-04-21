import React, { useContext } from 'react';
import '../../App.css';
import './Nav.css';
import { UserContext } from '../../Context/UserContext/Usercontext';
import { useNavigate } from 'react-router-dom';

const Nav = () => {

  const Navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(UserContext);
  console.log(currentUser); //provides a string
  let obj = JSON.parse(currentUser);
  if(currentUser){
  console.log(obj.firstName);
}

function handleSignout(){
  localStorage.clear();
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
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active text-success" aria-current="page" href="/">Home</a>
              </li>
             {currentUser ? <li class="nav-item">
                <button class="nav-link text-danger"  onClick={handleSignout}>Sign Out</button>
              </li>: <li class="nav-item">
                <a class="nav-link text-success" href="/signup">Signup/Login</a>
              </li>}

              <li class="nav-item">
                <a class="nav-link disabled" aria-disabled="true">Disabled</a>
              </li>
            </ul>

          </div>

          {currentUser && <div>
            <p className='text-warning'> {`${obj.firstName} ${obj.lastName}`}</p>
          </div>}
        </div>
      </nav>
    </div>
  )
}

export default Nav