import React, { useState, useEffect } from 'react';
import { Box, Button } from '@mui/material'
import NewProject from './InsertSegmento'
import ProjectForm from './ProjectForm'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';



//

const style = {
    width: '100%',
    maxWidth: 300,
    
    mx: 'auto'
  };
  function CleanButton ({text  ,setVoltar} )
  {
  
  
   
    return (
  
  
  
  
  <Box m={1} pt={1.6}  sx={style}>
 
  
  
  
  <Button  onClick={(e) => setVoltar('')}   sx={style}  size="large" startIcon={<ArrowBackIosIcon />} type="submit" variant='outlined'>Voltar</Button>  
  
  </Box>
  
  
  
  
    )
  
  
  
  
  }
  
  export default CleanButton