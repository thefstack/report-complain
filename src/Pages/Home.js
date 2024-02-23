import React from 'react'
import styled from 'styled-components'
import HomeCard from '../components/HomeCard';

const Home = () => {
  return (
    <Wrapper>
      <div className='homepage'>
        <HomeCard to="/report-complain" label="File Complain"/>
        <HomeCard to="/view-complain" label="View Complain"/>
        <HomeCard to="/profile" label="Profile"/>
      </div>
    </Wrapper>
  )
}

const Wrapper=styled.section`
  width:100%;
  display:flex;
  justify-content:center;
  align-items:center;
  min-height:100vh;

  .homepage{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
    padding: 30px;
    width: 100%;
}
@media(max-width:900px){
    .homepage{
        grid-template-columns: 1fr 1fr;
    }
}
@media(max-width:600px){
    .homepage{
        grid-template-columns: 1fr;
        width: 70%;
    }
}
@media(max-width:430px){
    .homepage{
        grid-template-columns: 1fr;
        width: 100%;
    }
}
`;
export default Home
