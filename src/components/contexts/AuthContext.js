import React from "react";
import { createContext,  useState } from "react";
import { signInWithEmailAndPassword,createUserWithEmailAndPassword } from "firebase/auth"
import { getAuth, onAuthStateChanged, sendPasswordResetEmail } from "firebase/auth"; 
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { app } from "../FirebaseConfig/Firebase";



const AuthContext = createContext()

export const AuthContextProvider = ({children})=>{


//set the user
const [currentUser, setCurrentUser]  = useState(null);
//create the auth 

const auth = getAuth(app)
//sign in the user
const userLogin = (email, password) =>{
    signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in +
                const user = userCredential.user;
                setCurrentUser(user);
                
                
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log('Failed with error : ' + errorMessage)
                alert(errorMessage)
            });

 }

 //create new user account 

const creatAccount = (email, password) =>{
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    setCurrentUser(user)

    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log('Failed with error : ' + errorMessage)
    alert(errorMessage)


    // ..
  });
}

//SIGNIN WITH GOOGLE
const signInWithGoogle = ()=>{
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
}

//Log the user out
const signOut = ()=>{
    auth.signOut()
}

//forgot password
const forgot = (email)=>{
  return sendPasswordResetEmail(auth,email)
  
} 



//observer for changes in the user object
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    // ...

    setCurrentUser(user)
  } else {
    // User is signed out
    // ...
    setCurrentUser(null)
  }
});


 const values = {
     currentUser , userLogin, creatAccount, signOut,signInWithGoogle,forgot
 }



    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;