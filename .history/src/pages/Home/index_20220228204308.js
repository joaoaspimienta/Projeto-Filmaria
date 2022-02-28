import { useEffect, useState } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

export default function Home() {
  const [filmes, setFilmes] = useState([]);

  useEffect(()=> {
    async function loadFilmes(){
      const response = await api.get('r-api/?api=filmes')
      setFilmes(response.data);
    }

    loadFilmes();
  }, [])

  return (
    <div>
      <h1>Página Home</h1>
    </div>        
  );
}