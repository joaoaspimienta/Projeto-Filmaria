import { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import api from '../../services/api'
import './filme-info.css'

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

  function salvaFilme(){
    const minhaLista = localStorage.getItem('filmes')

    let filmesSalvos = JSON.parse(minhaLista || [])

    const hasFilme = filmesSalvos.some((filmeSalvo) => filmeSalvo.id === filme.id)
  }


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
        <button onClick={salvaFilme}>Salvar</button>
        <button>
          <a target="blank" href={`https://youtube.com/results?search_query=${filme.nome} Trailer`}>
            Trailer
          </a>
        </button>
      </div>
    </div>
    
  )
}