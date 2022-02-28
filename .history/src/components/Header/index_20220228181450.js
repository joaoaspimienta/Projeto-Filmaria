import './header.css'
import { Link } from  'react-router-dom';

export default function Header(){
  return(
    <header>
      <Link>Filmaria</Link>
      <Link>Salvos</Link>
    </header>
  )
}