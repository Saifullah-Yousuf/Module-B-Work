import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function RadioButtonsGroup({ onChange , input01 , input02 , input03 , value01 , value02 , value03 , headingname}) { 
  return (
    <FormControl>
      <FormLabel 
        style={{ fontSize: '30px', fontStyle: 'italic', fontWeight: 'bold', marginTop: '15px', marginBottom: '10px', color: '#003366' }} 
        id="demo-radio-buttons-group-label"
      >
        {headingname}
      </FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
        onChange={onChange} 
      >
        <FormControlLabel value={value01} control={<Radio />} label={input01} />
        <FormControlLabel value={value02} control={<Radio />} label={input02} />
        <FormControlLabel value={value03} control={<Radio />} label={input03} />
      </RadioGroup>
    </FormControl>
  );
}

