import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';

import { auth } from './firebase';
import "./Login.css"
function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [name, setname] = useState("");
  const [profilepic, setprofilepic] = useState("");
  const dispatch = useDispatch()
  
  const loginto = (e)=>{
      e.preventDefault();
   auth.signInWithEmailAndPassword(email,password).then((userAuth)=>{dispatch(login({
           email: userAuth.user.email,
           uid: userAuth.user.uid,
           displayName: userAuth.user.displayName,
           profileUrl: userAuth.user.photoURL,
         })
       )
     }
   ).catch(error=>alert(error)) ;   


  }
  const register = ()=>{
    if(!name){
      return alert("Please enter your Full name")

    }

    auth.createUserWithEmailAndPassword(email,password)
    .then((userAuth)=>{
      userAuth.user.updateProfile({
        displayName: name,
        photoUrl: profilepic
      })
      .then(()=>{
        dispatch(login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: name,
          photoUrl: profilepic

        }))

      })
    }).catch(error=>alert(error.message))


    
  }
  return (
    <div className='login'>
        <img 
        src="https://www.pikpng.com/pngl/b/53-533463_linkedin-black-logo-linkedin-groups-transparent-logo-clipart.png" 
        alt="" />

        <form>
    
            <input value={name} onChange ={(e)=>setname(e.target.value)} placeholder= "Full name (required if registering)" type="text" />
            <input value={profilepic} onChange ={(e)=>setprofilepic(e.target.value)} placeholder="Picure link (optional)" type="text" />
            <input value={email} onChange = {(e)=>setemail(e.target.value)} placeholder="Email" type="email" />
            <input value={password} onChange = {(e)=>setpassword(e.target.value)} placeholder="Passsword" type="password" />
            <button type='submit' onClick={loginto}>Sign In</button>
              <p>Not a member?<span className='login__register' onClick={register}>Register now</span>
              </p>
        </form>
        
    </div>
  )
}

export default Login