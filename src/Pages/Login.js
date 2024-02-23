import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Login = () => {
  return (
    <Wrapper>
      <div className="form">
        <h1>User Login</h1>
        <form>
          <input name='user' type="text" placeholder='User Id'/>
          <input name='password' type="text" placeholder='Password'/>
          <input type="submit" className='btn'/>
        </form>
        <div className="form-bottom">
          <NavLink className="link form-link" to="/forgot-password">forgot Password</NavLink>
          <NavLink className="link form-link" to="/signup">New User</NavLink>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper=styled.section`
    max-width: 500px;
    width: 90%;
    margin: auto;
    padding:15% 0 200px 0;

.form{
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px;
    border-radius: 15px;
    flex-direction: column;
    gap: 30px;
    font-size: larger;
}

.form form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
}
.form form input{
    border: 1px solid;
    padding: 5px 20px;
    font-size: 1.4rem;
    border-radius: 10px;
}
.form form input[type='submit']{
    width: fit-content;
}
.form-bottom{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 20px;
}
.form-link{
    color: rgb(102, 102, 255);
    text-decoration: underline;
}
@media(max-width:500px){
    .form form input{
        width:100%;
        font-size:1.2rem;
    }
    .form form{
        width:60vw;
        min-width: 150px;
    }
    .form-link{
        font-size: 0.9rem;
    }
}
@media(max-width:300px){
    .form-bottom{
        flex-direction: column;
    }
}





`;

export default Login
