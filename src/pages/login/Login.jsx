import React, { useContext, useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import auth from '../../firebaseConfig';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

export default function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)

    const navigate = useNavigate();


    const {dispatch} = useContext(AuthContext)

    const handleLogin = (e) =>{
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          dispatch({type: "LOGIN", payload: user})
          navigate('/dashboard')
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(true);
          setEmail("");
          setPassword("");
        });
    }

    const handleSignin = (e) =>{
        e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            console.log(user);
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(true);
            // ..
        });
    }
  return (


    <div>
        <form onSubmit={handleLogin}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" value={email} onChange={(e)=> setEmail(e.target.value)} />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" value={password} onChange={(e)=> setPassword(e.target.value)} />
            <button type="submit">Login</button>
            {error && <span>password or email error</span>}
            
        </form>

    </div>
  )
}
