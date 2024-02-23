import React, {useState } from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import styled from 'styled-components';

const InputTypeSelect = (props) => {
  const {label,labelValue,width,items} = props;

  const [selectValue, setSelectValue] = useState(labelValue)

  const handleChange = (event) => {
    setSelectValue(event.target.value);
  };

  return (
              <Wrapper className='input-type-select'>
            <Box sx={{ minWidth: width }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">{label}</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={selectValue}
                  label={label}
                  onChange={handleChange}
                  size='small'
                >
                {items.map((currElem)=>{
                  return <MenuItem key={currElem} value={currElem}>{currElem}</MenuItem>
                })}
                  
                </Select>
              </FormControl>
            </Box>
          </Wrapper>
  )
};

  const Wrapper=styled.div`
  width: 100%;
  `;



InputTypeSelect.defaultProps={
  label: 'Default Label',
  labelValue: 'Default Label Value',
  width: "50%",
  items: [],
}

export default InputTypeSelect
