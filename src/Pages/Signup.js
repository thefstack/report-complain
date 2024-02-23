import React, { useState } from 'react'
import styled from "styled-components"

const Signup = () => {
  const [otpAadharInput,setotpAadharInput]=useState(false)

  const formSubmit=(e)=>{
    e.preventDefault()
    alert("Otp Sent on mobile no linked with aadhar")
    setotpAadharInput(true);
  }
  

  return (
    <Wrapper>
      <div className="signup-form-container">
      <h1>Sign Up</h1>
        <form className='signup-form' onSubmit={formSubmit}>
          <input type="text" placeholder='Full Name'required/>
          <select name="gender" id="gender" className='select' required>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <input type="Number" placeholder='Phone No' required/>
          <input type="email" placeholder='Email Address' required/>
          <input type="number" placeholder='aadhar' required/>
          <input type="submit" className='btn' value="Next" required/>
        </form>
        {otpAadharInput && (<form className="otp-verify">
            <div className="otp-container">
                <input type="number" name="otpAadh" placeholder="OTP" required/>
                <button>Resend OTP</button>
            </div>
            <input type="submit" className="btn" />
          </form>)}
      </div>
    </Wrapper>
  )
}

const Wrapper=styled.section`
padding-bottom:150px;
display:flex;
justify-content:center;
align-item:center;

.signup-form-container{
    padding: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    width: 70%;
    background-color: #fff;
    max-width: 500px;
    width: 90%;
    margin: 20px;
    border-radius: 10px;
}
.signup-form-container>h1{
    font-size: 1.8rem;
}
.signup-form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
}
.signup-form input{
    border: 1px solid;
    padding: 5px 20px;
    font-size: 1.4rem;
    border-radius: 10px;
    width: 100%;
}
.signup-form input[type="submit"]{
    width: fit-content;
}
.otp-verify{
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    
}
.otp-verify input{
    border: 1px solid;
    padding: 5px 20px;
    font-size: 1.4rem;
    border-radius: 10px;
    width: 100%;
}
input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0; 
}
.otp-verify input[type="submit"]{
    width: fit-content;
}
.select{
    border: 1px solid;
    padding: 5px 20px;
    font-size: 1.4rem;
    border-radius: 10px;
    width: 100%;
}
.otp-container{
    display:flex;
    gap:15px;
    padding:0 10%;
    button{
        min-width:50px;
        font-size:0.8rem;
        border-radius:10px;
        padding:5px;
        outline:none;
        margin:none;
        border:none;
        background:#a8a7a3;
        color:#fff;
    }
}
@media(max-width:400px){
    .signup-form input{
        font-size: 1rem;
    }
    .otp-verify input{
        font-size: 1rem;
    }
    .select{
        font-size: 1rem;
    }
}
@media(max-width:500px){
    .otp-container{
    flex-direction:column;
    
    button{
        width:100px;
    }
}
}

`;

export default Signup
