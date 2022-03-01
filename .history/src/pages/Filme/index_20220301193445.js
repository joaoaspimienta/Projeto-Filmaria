import { useState, useEffect } from 'react'
import './filme-info.css'
import { useParams, useHistory } from 'react-router-dom'
import api from '../../services/api'

export default function Filme(){
  const { id } = useParams();
  const history = useHistory();
  const [filme, setFilme] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() =>{
    async function loadFilme(){
      const response = await api.get(`r-api/?api=filmes/${id}`)

      if(response.data.length === 0){
        history.replace('/');
        return;
      }

      setFilme(response.data)
      setLoading(false)
    }

    loadFilme()
  }, [id, history]);


  if(loading){
    return(
      <div className="filme-info">
        <h1>Carregando</h1>
        <div className="loader"></div>
      </div>
    )
  }
  return(
    <div className="filme-info">
      <h1>{filme.nome}</h1> 
      <img src={filme.foto} alt={filme.nome} />      
      <h3>Sinopse</h3>      
      <span>{filme.sinopse}</span>

      <div className="botoes">
        <button onClick={()=>{}}>Salvar</button>
        <button>
          <a href={`https://youtube.com/results?search_query=${filme.nome} Trailer`}></a>
        </button>
      </div>
    </div>
    
  )
}