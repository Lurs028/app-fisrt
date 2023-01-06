import React, { useState, useEffect } from 'react';
import CleanButton from './Btnvoltar'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import SubmitButton from './SubmitButton';
import CreateIcon from '@mui/icons-material/Create';
import ListDividers from './Lista';
import { MenuItem } from '@mui/material';


function ProjectForm({ handleReseult,handleSubmit, btnText, projectData,setVoltar }) {

  const [project, Setproject] = useState(projectData || {});
  const [selectedIndex, setSelectedIndex] = React.useState();
  const [search, Setsearch] =  React.useState("");
  const [Segmento, SetSegmento] = useState([]);
  const [dataB, SetData] = useState(); 
  const [selecaoLista, SetSelecaoLista] =  useState("");

  useEffect(() => {
    fetch('http://localhost:5000/Segmento', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        SetSegmento(data);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(Segmento)

  const submit = (e) => {
    e.preventDefault();
    console.log(project);
    handleReseult(project.Segmento.nome);
    handleSubmit(project);
    SetData(project.Segmento.nome)
  };
   

  const  searchLowerCase = search.toLowerCase()
    const filtro = Segmento.filter((Item) =>    Item.nome.toLowerCase().includes(searchLowerCase));
console.log(filtro)



  
      
      function handleSegmentos(e,id,nome)  {
        Setproject({...project,Segmento: e});
        setSelectedIndex(id)
        SetData(e.nome)
        SetSelecaoLista('')
       } 
      console.log(selectedIndex);
        console.log(project);
          
          
     

      
        const style = {
          width: '100%',
          maxWidth: 700,
          bgcolor: 'background.paper',
          mx: 'auto'
        };
        
      

  return (

    
<div>




<Box
        sx={{
          textAlign: 'center',
           mx: 'auto', width: 1900 ,
        
          m: 1,
          fontSize: '1.5rem',
          fontWeight: 'bold' ,
          fontFamily: 'Segoe UI',
          color: 'GrayText'
        }}
      >
         Segmento Selecionado 
       
        </Box>



<Box
        sx={{
          textAlign: 'center',
           mx: 'auto', width: 1900 ,
        
          m: -2,
          fontSize: '5rem',
          fontWeight: 'regular' ,
          fontFamily: 'Segoe UI',
          color: 'primary.main'
        }}
      >
      <Button onClick={(e) => SetSelecaoLista(e)}    type="text"  variant='outlined'  style={{ margin: 10,maxWidth: '60px', maxHeight: '50px', minWidth: '60px', minHeight: '50px'}} startIcon={<CreateIcon />} />
      
     
        {dataB? <>{dataB}</> : <>Nenhum</>}
      
     
    
        </Box>
        
        
        
        


       


  
    <form  onSubmit={submit}    >
              
{selecaoLista   &&(
    <div>
    
 
   
         <Box m={5} pt={6}
       sx={style}
    >
        

      <TextField  
      sx={{ borderRadius: 2,
      margin: 0.5 ,border: 0.5 ,width: 700 ,borderColor: 'primary.main',boxShadow: 5}}
        type="Text"
        placeholder="Busque o segmento"
        name="name"
        onChange={(e) => Setsearch(e.target.value)}
        value={search}
        
      />

<ListDividers id={filtro.id} handleOnChange={handleSegmentos} Segmento={filtro}    selectedIndex={selectedIndex}   key={filtro.nome}  >
      <ListDividers    >
        <ListDividers/>
      </ListDividers>
      </ListDividers>
      

   
</Box>
   </div>

)}
     
      
      
      
     
    
     {dataB? 
   <SubmitButton text={btnText}  type="submit"/> 
   :""}
   
   </form> 
   {dataB? 
   <CleanButton    setVoltar = {handleSegmentos}/> :""}


 
 </div>       

  );
}

export default ProjectForm;
