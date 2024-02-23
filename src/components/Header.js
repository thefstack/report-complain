import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from "styled-components"

const Header = () => {
  return (
    <Wrapper>
      <div className='header'>
        <h1>Report Complain</h1>
        <NavLink className="btn" to="/logout"><p>Logout</p></NavLink>
      </div>
      <div className="header-nav">
        <div><NavLink to="/" className="link">Home</NavLink></div>
        <div> <NavLink to="/report-complain" className="link">Report Complain</NavLink></div>
        <div><NavLink to="/view-complain" className="link">View Complain</NavLink></div>
        <div><NavLink to="/profile" className="link">Profile</NavLink></div>
      </div>
    </Wrapper>
  )
}

const Wrapper=styled.section`
    .header{
    background-color: #d6d8db;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 50px;
    color: #102770;
    gap: 10px;
    transition: 0.2s;
    user-select:none;
}
.header-nav{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-content: center;
    align-items: center;
    background-color: #d6d8db7a;
    gap: 10px;
    padding: 10px 10px;
}
.header-nav div{
  display:flex;
  justify-content:center;
  align-items:center
}
.header-nav .link{
    font-size: 1.1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #0c173a;
    text-align:center;
    padding:10px;
    cursor:pointer;
}
.header-nav .link:hover{
  color:  #05668D;
}
@media(max-width:813px){
    .header-nav{
        grid-template-columns: 1fr 1fr;
        gap: 10px;
    }
}
@media(max-width:400px){
    .header{
        font-size: 0.8rem;
        display: flex;
        justify-content: space-between;
        transition: 0.2s;
        padding: 10px 30px;
    }
}
@media(max-width:330px){
    .header{
        transition: 0.2s;
        flex-direction: column;
    }
    .header-nav{
        grid-template-columns: 1fr;
    }
}

`;

export default Header
