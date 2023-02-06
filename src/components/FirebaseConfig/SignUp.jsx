import React, { useRef } from "react";
import './SignUp.css'
import { Link } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";


const SignUp = () => {
    const navigate = useNavigate()
    const {creatAccount} = useContext(AuthContext)

    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordRef2 = useRef()



    return ( 
        <>
           <div className="parent">
            <div className="container1">
                <h2>SIGN UP</h2>
                  <form onSubmit={(e)=>{
                    e.preventDefault()

                    //check if passwords match 
                     
                  if (passwordRef.current.value===passwordRef2.current.value){
                    try{
                      
                      creatAccount(emailRef.current.value, passwordRef.current.value);
                      navigate('/')
                      
                    }
                    catch(err){
                      alert(err)
                    }
                  }else{
                    alert('Passwords Mismatch.Please input the same password.')
                  }  
                  }}>
                    <div style={{display:'flex'}} ><p>UserName*</p></div> 
                    <div className='username'><input type="text" placeholder="johndoe"/></div>

                   <div style={{display:'flex',marginTop:'.5rem'}}><p>Email*</p></div> 
                    <div className="emailInput"><input ref={emailRef} type="email" placeholder="johndoe@gmail.com"/></div>

                    <div style={{display:'flex',marginTop:'.5rem'}}><p>Password*</p></div>
                    <div className="passwordInput"><input ref={passwordRef} type="password" placeholder="Input password"/></div>
                    <div style={{display:'flex',marginTop:'.5rem'}}><p>Confirm Password*</p></div>
                    <div className="confirmInput"><input ref={passwordRef2} type="password" placeholder="Confirm password"/></div>
                <div className="signbtn">
                    <input type='submit' value='Create account' />
                </div>
                </form>
                 <div className="alreadyRegistered">
                    <p>Already have an account?</p>
                    <Link to='/Login'>Login</Link>   
                  </div>
            </div>
        </div>
        </>
     );
}
 
export default SignUp;