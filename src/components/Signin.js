import React from 'react'
import { Button } from '@mui/material'
import social from "../images/social.png"
import { signInWithPopup } from 'firebase/auth'
import {auth, googleProvider} from "../firebase/setup.js"


function Signin() {

  const googleSignin = async() => {
    try{
      await signInWithPopup(auth, googleProvider)
    }catch(err){
      console.log(err) 
    }
  
  }
  console.log(auth)


  return (
    <div style={{ 
      position: "absolute", 
      top: "50%", 
      left: "50%", 
      transform: "translate(-50%, -50%)", 
      padding: "20px", 
      border: "1px solid grey", 
      textAlign: "center", 
      borderRadius: "5px", 
      minHeight: "310px", 
      maxWidth: "350px"
    }}>
      <img style={{width:"70px"}} src={social} />
      <h2 style={{fontWeight:"200"}}>Create your Google clone account</h2>
      <h3 style={{fontWeight:"200"}}>Click the signin button</h3>
      <Button onClick={googleSignin} variant='contained'>Signin with Google</Button>
    </div>
  )
}

export default Signin