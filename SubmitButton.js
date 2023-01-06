import React, { useState, useEffect } from 'react';
import { Box, Button } from '@mui/material'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
const style = {
  width: '100%',
  maxWidth: 300,
  
  mx: 'auto'
};
function SubmitButton ({text  ,SetSelecaoLista} )
{


  const [voltar, setVoltar] =  useState("");

  return (




<Box m={2} pt={3}  sx={style}>


<Button  sx={style}  size="large" startIcon={<CheckCircleOutlineIcon />} type="submit" variant='contained'>{text}</Button>


</Box>




  )




}

export default SubmitButton