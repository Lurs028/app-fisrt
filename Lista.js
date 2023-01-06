  import * as React from 'react';
  import List from '@mui/material/List';
  import ListItem from '@mui/material/ListItem';
  import ListItemText from '@mui/material/ListItemText';  
  import { makeStyles } from '@mui/material/styles'  
  import Divider from '@mui/material/Divider';

  const style = {
    width: '100%',
    maxWidth: 700,
    bgcolor: 'background.paper',
    mx: 'auto'
  };


   function ListDividers({ id,Segmento, value,onClick,handleOnChange,selectedIndex} ) {


     
      return(
   
<div>
<List m={5} pt={6} sx={style}  component="nav" aria-label="mailbox folders" >


   
        {  Segmento?.map((Item,index) =>      
    
    <ListItem sx={{   margin: 0.5 ,border: 0.5 ,width: 700 ,borderColor: 'primary.main', borderRadius: 2,boxShadow: 5}} button divider id={`${Item}`} selected={selectedIndex===Item.id}   onClick={ () => handleOnChange(Item,Item.id)}  value={value || '' } key={index}   >
        <ListItemText   sx={{ textAlign: 'center'}} value={Item }    primary={Item.nome || ''} />
        
        
              
              </ListItem>
           )}
   
   <Divider />

   </List>
 
   </div>
   )}

export default ListDividers

