import React from "react";
import './Login.css'
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import HomePage from "../homepage/HomePage";


const Login = () => {

 const {currentUser , userLogin,signInWithGoogle,forgot} = useContext(AuthContext)

const emailRef = useRef()
const passwordRef = useRef()

const forgotPasswordHandler = ()=>{
    const email = emailRef.current.value
    if(email) forgot(email).then(()=>{
        emailRef.current.value=""
        alert('Password reset email has been sent')
    })
}

    return ( 
        
       <> 
        {
            currentUser ? <HomePage/> : <div className="loginPage">
            <div className="containerone">
                <h2>LOGIN </h2>
                <div className="google">
                    <img src="icons8-google-48.png" alt="google icon"/>
                    <button className="googleBtn" onClick={signInWithGoogle}>Sign up with google</button>
                </div>
                <div className="lines">
                    <div className="lineone"></div>
                    <p>Or sign in with email</p>
                    <div className="line"></div>
                </div>
               
                <form onSubmit={(e)=>{
                    e.preventDefault()
                        userLogin(emailRef.current.value, passwordRef.current.value)
                    }}>
                   <div className="div"><p>Email*</p></div> 
                    <div className="emailplace"><input ref={emailRef} type="email" placeholder="johndoe@gmail.com" required /></div>
                
                
                    <div className="div"><p>Password*</p></div>
                    <div className="passplace"><input ref={passwordRef} type="password" placeholder="Input password" required/></div>
                
                <div className="forgot">
                    <p onClick={forgotPasswordHandler}>Forgot password?</p>
                </div>
                <div className="loginBtn">
                    <input type='submit'value='login'/>
                </div>
                </form>
                <div className="notregisterd">
                    <p>Not registered yet?</p>
                   <Link to='/SignUp'>Create an Account</Link>
                </div>
            </div>
        </div>

        }

       </>

     );
}
 
export default Login;