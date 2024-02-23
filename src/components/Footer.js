import React from 'react'
import styled from 'styled-components'


const Footer = () => {
  return (
    <Wrapper className='footer'>
      <p>&copy;Copyright </p>
      <p>Raj</p>
    </Wrapper>
  )
}
const Wrapper=styled.section`
    background-color: #d6d8db;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    gap:10px;
    padding:30px 0;
    position:absolute;
    bottom:0px;
    width:100%;
    min-width: 238px;
    max-width: 1440px;
`;

export default Footer
