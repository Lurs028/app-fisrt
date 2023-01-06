import styles from './Select.module.css'

import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/MenuItem';

import MenuItem from '@mui/material/MenuItem';
function Select ({ text,name,options,handleOnChange,value} )
{

  return (

<div className={styles.form_control} >
   
   <label htmlFor={name} > {text}:</label>  
   <select   name = {name} id={name} onChange={handleOnChange}   value= {value || ''}>
   <option> Escolha um Segmento</option>
   {options.map((option) => (
    <option value={option.id} key={option.id}>{option.nome}</option>
    
   ))}



   </select>
    
</div>



  )




}

export default Select