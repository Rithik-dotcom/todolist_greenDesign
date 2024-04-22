import React, { useContext } from 'react'
import './Login.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { UserContext } from '../../Context/UserContext/Usercontext';

const Signin = () => {
const {loggedIn, setLoggedin, userData, setCurrentUser} = useContext(UserContext);
    const formik = useFormik({
        initialValues: {
            firstName: '',
            // lastName: '',
            // email: '',
            // password: '',
            // passwordConfirmation: '',
        },

        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
            // lastName: Yup.string()
            //     .max(20, 'Must be 20 characters or less')
            //     .required('Required'),
            // email: Yup.string().email('Invalid email address').required('Required'),
            // password: Yup.string().required('Required').min(6),
            // passwordConfirmation: Yup.string()
            //     .oneOf([Yup.ref('password'), null], 'Passwords must match')
        }),
        onSubmit: values => {
            
            alert(JSON.stringify(values, null, 2));
            let user = JSON.stringify(values, null, 2);
            setCurrentUser(user);
          console.log(values)
    
          
          const userDataArray = userData.map(user => JSON.parse(user));

// Access the "firstName" value from each object
function check() {
    const foundUser = userDataArray.find(user => user.firstName === values.firstName);
    if (foundUser) {
        console.log("Found user with firstName 'abc'");
        alert("SuccessFull Login");
        setLoggedin(true)
        return true;
    } else {
        alert("No user Found");
        return false;
    }
}

check();

            // user.firstName === values.firstName);
        //   if (userExists) {
        //       console.log("User exists!");
        //       // Set user as logged in or perform any other actions
        //   } else {
        //       console.log("User does not exist!");
        //       // Handle case when user does not exist
        //   }


            formik.resetForm();
            
        },
    });

  
    return (
        <div>
            <div className="form-container sign-in-container">
                <form onSubmit={formik.handleSubmit}>
                    <h1>Sign in</h1>
                    <div className="social-container">
                        <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                        <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                    <span>or use your account</span>
                    <label htmlFor="firstName">First Name</label>
                    <input
                        // id="firstName"
                        name="firstName"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.firstName}
                    />
                     {formik.touched.firstName && formik.errors.firstName ? (
                            <div className='text-danger'>{formik.errors.firstName}</div>
                        ) : null}
                  
                    <button type='submit'>Sign In</button>
                </form>
            </div>

        </div>
    )
}

export default Signin