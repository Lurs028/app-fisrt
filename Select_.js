import { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function Frase({ text, name, options, handleOnChange, value, project }) {
  const [Segmento, SetSegmento] = useState([]);

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Segmento</InputLabel>
        <Select onChange={handleOnChange} value={value || ''} displayEmpty>
          {options?.map((Menuitem, index) => (
            <MenuItem  variant = 'selectedMenu' value={Menuitem}  key={Menuitem.id}>
              
              {Menuitem.nome}  
            </MenuItem>

          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

export default Frase;

