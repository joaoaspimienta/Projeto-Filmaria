import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function Favoritos(){
  const [filmes, setFilmes] = useState([])

  useEffect(()=>{
    const minhaLista = localStorage.getItem('filmes')
    setFilmes(JSON.parse(minhaLista) || [])
  }, [])

  return(
    <div id="meus-filmes">
      <h1>Meus filmes</h1>

      <ul>
        {filmes.map((item)=>{
          return(
            <li key={item.id}>
              <span>{item.nome}</span>

              <div>
                <Link to={`/filmes/${item.id}`}>Ver detalhes</Link>
                <button onClick={()=>{}}>Excluir</button>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}