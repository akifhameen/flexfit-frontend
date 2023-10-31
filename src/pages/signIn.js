import React, { useState } from 'react'
import './signIn.css'
import weights from '../assets/images/weights.png'

const SignIn = () => {

//     const[error ,setError] = useState('');
//     const[userInfo , setUserInfo] = useState({
//         email:'',
//         password:'',
//     })

//     const handleOnChangeText =(value, fieldName) =>{
//         setUserInfo({...userInfo,[fieldName]:value})
//     }

//     const isValidObjectField = (obj) =>{
//         return Object.values(obj).every(value => value.trim())
  
//     }
  
//       const updateError = (error,stateUpdater)=>{
//           stateUpdater(error);
//           setTimeout(()=>{
//               stateUpdater('')
//           },2500);
//       }
  
//       const isValidEmail = (value) =>{
//           const regx = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
//           return regx.test(value)
//       }
  
//     const isValidForm =()=>{
//       // check all values
//       if(!isValidObjectField(userInfo)) return updateError('Required all fields',setError)
//       // only valid email is is allowed
//       if(!isValidEmail(email)) return updateError('Invalid email !', setError)
//       // password must be 8 characters
//       if(!password.trim() || password.length < 8) return updateError('Password is less than 8 characters', setError)
    
//       return true;
//   }
//     const submitForm =() =>{
//         if(isValidForm){
//             console.log('ggg')
//         }
//         else{
//             console.log('failed')
//         }
//     }

//     const {email,password} = userInfo
    return (
      <div class='signin__main-div'>
            <div class="signin__form-div">
                <img src={weights} />
                <p class="p1">Good to see you again !</p>
                <p class="p2">Sign In</p>
                <form>
                    <input class="inputEmail" autoCapitalize='none' type="email" name="name" placeholder='Email' required />
                    <input type="password" name="password" placeholder='Password' required />
                    <button>Submit</button>
                </form>
                <p class="p3">Don't have an account ? <span><a href='/signup'>Sign Up</a></span></p>
            </div>
      </div>
    )
  }
  
  export default SignIn