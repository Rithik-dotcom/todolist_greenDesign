//this is a signUp form
import React, { useContext, useState } from 'react';
import './Login.css'
import { UserContext } from '../../Context/UserContext/Usercontext';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Signin from './Signin';

const Login = () => {
    const { userData, setUserData } = useContext(UserContext);
    console.log(userData)
    const [signupclass, setSignupclass] = useState(false);

    function handleSignup() {
        setSignupclass(true);
    }

    function handleSignin() {
        setSignupclass(false);
    }


    const formik = useFormik({
        initialValues: {
            firstName: '',
            // lastName: '',
            email: '',
            password: '',
            passwordConfirmation: '',
        },

        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
            // lastName: Yup.string()
            //     .max(20, 'Must be 20 characters or less')
            //     .required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string().required('Required').min(6),
            passwordConfirmation: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match')
        }),
        onSubmit: values => {
            
            alert(JSON.stringify(values, null, 2));
            let user = JSON.stringify(values, null, 2);
            // setCurrentUser(user);
            console.log("IN Login:"+JSON.stringify(values, null, 2));
            setUserData(para => {
                if (userData.includes(user)) {
                    alert('user already exist')
                    return [...para]
                } else {
                    return [...para, user]
                }
            });
           
            // console.log(userData);

            formik.resetForm();
            
        },
    });


    //sign in submit
    // function handleChange(event){
    //     console.log(event.target.value)
       
    // }

    // function handleSignInSubmit(event){
    //     event.preventDefault()
    //     console.log(event.target)
    //     let key= "firstName"
    //    for(let each of userData){
    //    if (each.hasOwnProperty(key ) && each[key] === event.target[0].value) {
    //     console.log('yes')
    //         return true; // Return true if found
    //     }else{
    //         console.log("error");
    //     }
    //    }
    // }




    return (
        <div>


            <div className={signupclass ? "container right-panel-active" : "container"} id="container">
                {/* <div className="container" id="container"> */}
                <div className="form-container sign-up-container">
                    <form onSubmit={formik.handleSubmit}>
                        <h1>Create Account</h1>
                        <div className="social-container">
                            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                        <span>or use your email for registration</span>
                        <label htmlFor="firstName">First Name</label>
                        <input
                            id="firstName"
                            name="firstName"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.firstName}
                        />
                        {formik.touched.firstName && formik.errors.firstName ? (
                            <div className='text-danger'>{formik.errors.firstName}</div>
                        ) : null}


                        {/* <label htmlFor="lastName">Last Name</label>
                        <input
                            id="lastName"
                            name="lastName"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.lastName}
                        />
                        {formik.touched.lastName && formik.errors.lastName ? (
                            <div className='text-danger'>{formik.errors.lastName}</div>
                        ) : null} */}

                        <label htmlFor="email">Email Address</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <div className='text-danger'>{formik.errors.email}</div>
                        ) : null}


                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                        />
                        {formik.touched.password && formik.errors.password ? (
                            <div className='text-danger'>{formik.errors.emaipasswordl}</div>
                        ) : null}


                        <label htmlFor="passwordConfirmation">passwordConfirmation</label>
                        <input
                            id="passwordConfirmation"
                            name="passwordConfirmation"
                            type="password"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.passwordConfirmation}
                        />
                        {formik.touched.passwordConfirmation && formik.errors.passwordConfirmation ? (
                            <div className='text-danger'>{formik.errors.passwordConfirmation}</div>
                        ) : null}



                        {/* <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" /> */}
                        <button type='submit' >Sign Up</button>
                    </form>
                </div>

              <Signin/>

                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button className="ghost" id="signIn" onClick={handleSignin}>Sign In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start journey with us</p>
                            {/* <button className="ghost" id="signUp" onClick={handleSignup}>Sign Up</button> */}
                            <button className="ghost" id="signUp" onClick={handleSignup} type='submit'>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer">
                <b>	Follow me on </b>
                <div className="icons">
                    <a href="https://github.com/kvaibhav01" target="_blank" className="social"><i className="fab fa-github"></i></a>
                    <a href="https://www.instagram.com/vaibhavkhulbe143/" target="_blank" className="social"><i className="fab fa-instagram"></i></a>
                    <a href="https://medium.com/@vaibhavkhulbe" target="_blank" className="social"><i className="fab fa-medium"></i></a>
                    <a href="https://twitter.com/vaibhav_khulbe" target="_blank" className="social"><i className="fab fa-twitter-square"></i></a>
                    <a href="https://linkedin.com/in/vaibhav-khulbe/" target="_blank" className="social"><i className="fab fa-linkedin"></i></a>
                </div>
            </div>
        </div>
    )
}

export default Login