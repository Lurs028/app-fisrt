import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import NewProject from './InsertSegmento';
import NovoSegmento from './NovoSegmento';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import InventoryIcon from '@mui/icons-material/Inventory';


function App({ id,name, Segmento, setResultados }) {
  const [project, setProject] = useState([]);
  const [selecaoLista, SetSelecaoLista] =  useState("");

  useEffect(() => {
    fetch('http://localhost:5000/projects', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setProject(data);
      })
      .catch((err) => console.log(err));
  }, []);



  const [result, setResult] = useState('')
  const updateResults = r =>{
   setResult(r)
  }


  console.log(result)









  return (
    <div>
      


      
      <Box m={15} pt={20}
        sx={{
          textAlign: 'center',
           mx: 'auto', width: 1900 ,
        
          m: 1,
          fontSize: '5rem',
          fontWeight: 'regular' ,
          fontFamily: 'Segoe UI',
          color: 'primary.main'
        }}
      >
        <InventoryIcon sx={{ color:"primary" ,fontSize: 70,margin: 2 , position: 'relative', top: '25px' ,}} />
        Segmento da Empresa
        
      </Box>
 
  
  
     <div>
      <Box m={0.5} pt={0.6}
        sx={{
          textAlign: 'center',
           mx: 'auto', width: 1900 ,
           margin: 5,
          m: 1,
          fontSize: '1rem',
          fontWeight: 'regular' ,
          fontFamily: 'Segoe UI',
          color: 'black'
        }}
      >
        { result?
        <>Obrigada por cadastrar o segmento de:  {result} </> :<> Confirme o segmento que sua empresa atua para personalizarmos sua experiência em nosso aplicativo</> }
        
      </Box>
      </div>
    
 

     <div>
      <Router>
        

        <Routes>
          <Route exact path="/" element={<NewProject  setResultados={updateResults}/>} />
          
        </Routes>
      </Router>

      <Router>
        <ul>
        
        </ul>
        <Routes>
          <Route
           
          />
        </Routes>
      </Router>

    





      </div>
    

      </div>



   
  );
}

export default App;
