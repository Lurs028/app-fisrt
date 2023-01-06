import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import ProjectForm from './ProjectForm';






function NewProject({project,setResultados}) {
  const history = useNavigate();



 const [result, setResult] = useState('')
 const updateResult = r =>{
  setResult(r)
  setResultados(r)
 }

 
 const [resultado, setResultado] = useState('')
 const updateResultado = result =>{
  setResultados(result)
  
 }

 
  function creatPost(project) {
    
    project.cost = 0;
    project.services = [];
    fetch('http://localhost:5000/projects', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {    console.log(data)
        
        //history
        history('/projects', { mensage: 'Enviado com sucesso' });
      })
      .catch((err) => console.log(err));
    

  }
 console.log(result)
 console.log(resultado)

  const style = {
    width: '100%',
    maxWidth: 700,
    bgcolor: 'background.paper',
    mx: 'auto'
  };
  return (
    
    <div sx={style}   >
     
      
      <ProjectForm sx={style}  handleReseult ={updateResult}  handleSubmit={creatPost} btnText="Cadastrar" />
    <div    > </div> 
    </div> 
  );
}

export default NewProject;
