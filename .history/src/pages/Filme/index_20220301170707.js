import { useState, useEffect } from 'react'
import './filme-info.css'
import { useParams } from 'react-router-dom'
import api from '../../services/api'
import { Link } from '../../services/'

export default function Filme(){
  const { id } = useParams();
  const [filme, setFilme] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() =>{
    async function loadFilme(){
      const response = await api.get(`r-api/?api=filmes/${id}`)
      setFilme(response.data)
      setLoading(false)
    }

    loadFilme()
  }, [id])


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
      <h1>PÁGINA DETALHES</h1>
      <div className="container">
      <div className="lista-filmes">
        {filme.map((filme)=>{
          return(
            <article key={filme.id}>
              <strong>{filme.nome}</strong>
              <img src={filme.foto} alt={filme.nome} />
              <Link to={`/filme/${filme.id}`}>Acessar</Link>
            </article>
          )
        })}
      </div>
    </div>     
    </div>
    
  )
}