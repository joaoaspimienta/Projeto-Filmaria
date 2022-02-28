import './header.css'
import { Link } from  'react-router-dom';

export default function Header(){
  return(
    <header>
      <Link to="https://mail.google.com/mail/u/0/#inbox">Filmaria</Link>
      <Link>Salvos</Link>
    </header>
  )
}