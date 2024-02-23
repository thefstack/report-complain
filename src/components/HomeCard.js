import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const HomeCard = (props) => {
  return (
    <Wrapper>
      <div className='homecard'>
        <NavLink to={props.to} className="label">{props.label}</NavLink>
      </div>
    </Wrapper>
  )
}
const Wrapper=styled.div`
.homecard{
    background-color: #2c3e50;
    font-size: 1.6rem;
    border-radius: 10px;
    cursor: pointer;
    transition: 1s;
    width: 100%;
}
.homecard .label{
    color: #fff;
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 80px 30px;
    text-decoration: none;
}
.homecard:hover .label{
    font-size: 1.7rem;
}
@media(max-width:400px){
    .homecard{
        font-size: 1.2rem;
        font-weight: 700;
    }
}

`

export default HomeCard
