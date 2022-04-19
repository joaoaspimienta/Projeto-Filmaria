import { Link } from 'react-router-dom'
import './erro.css'

export default function Erro(){
  return(
    <div className='not-found'>
      <p>404</p>
      <h2>Página não encontrada!</h2>
      <Link to="/">Veja todos os filmes!</Link>
    </div>
  )
}