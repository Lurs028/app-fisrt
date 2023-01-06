
import { useEffect, useState } from 'react';

function NovoSegmento({ id, name, Segmento, nome,handleRemove }) {
  const [project, setProject] = useState([]);

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
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
    
    
    
    <div>
     
  
      <p>Segmento:{Segmento}  </p>
      <p>ID:{id}</p>
     
    </div>
    
    </>
  );
}
export default NovoSegmento;
