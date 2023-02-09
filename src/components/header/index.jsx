import './style.css'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img src="/img/logo.png" alt="logo" />
      </Link>

      {/* <ul>
        <li>Notícias</li>
        <li>Política</li>
        <li>Econômia</li>
      </ul> */}
    </div>
  );
}