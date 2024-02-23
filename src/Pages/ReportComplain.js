import React from "react";
import styled from "styled-components";
import InputTypeSelect from "../components/InputTypeSelect";
import "../common.css"
import TextField from '@mui/material/TextField';

const ReportComplain = () => {
  const inputWidth="100%";


  return (
    <Wrapper>
      <div className="report-complain-container">
        <h1>Report Complain</h1>

        <form className="report-complain-form">

         <div className="form-input-container">
          <label className="input-label">Age</label>
          <InputTypeSelect className="input"
          label="Age" labelValue="age" width={inputWidth} items={["one","Two","three"]}/>
         </div>

        <div className="form-input-container">
          <label className="input-label">label</label>
          <TextField className="input" id="standard-basic" label="Standard" variant="filled" size="small"/>
        </div>

          

          <input type="submit" className="btn" value="Submit" required />
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding-bottom: 150px;
  display: flex;
  justify-content: center;
  align-item: center;
  width: 100%;

  .report-complain-container {
    padding: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    background-color: #fff;
    width: 90%;
    max-width: 800px;
    margin: 20px;
    border-radius: 10px;
  }
  .report-complain-container > h1 {
    font-size: 1.8rem;
  }
  .report-complain-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 80%;
  }


  .report-complain-form input[type="submit"] {
    width: fit-content;
  }
  
  .input-text{
  width: 100%;
}
.form-input-container{
  display: grid;
  grid-template-columns: 100px 1fr;
  justify-content: center;
  align-items: center;
  gap: 15px;
  width: 100%;

  .input-label{
    font-weight: 700;
    font-size: 1.6rem;
  }
  .input{
    width: 100%;
  }
}
@media(max-width:600px){
  .form-input-container{
  
    .input-label{
      font-weight: 700;
      font-size: 1.4rem;
    }
  }
  .report-complain-container{
    padding: 50px 10px;
  }
}

  @media (max-width: 400px) {
    .form-input-container{
      gap:5px;
      grid-template-columns: 50px 1fr;
    }
    .form-input-container{
    .input-label{
    font-weight: 700;
    font-size: 0.9rem;
  }
}
.report-complain-container > h1 {
    font-size: 1.4rem;
  }
    .report-complain-form{
      gap:30px;
    }
    .report-complain-container{
    margin:5px;
  }
    .report-complain-form input {
      font-size: 1rem;
    }
    .select {
      font-size: 1rem;
    }
  }
`;

export default ReportComplain;
