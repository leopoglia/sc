import './style.css'

export default function Header() {
  return (
    <div className="header">
      <img src="/img/logo.png" alt="logo" style={{width: '50px'}} />

      <ul>
        <li>Notícias</li>
        <li>Política</li>
        <li>Econômia</li>
      </ul>
    </div>
  );
}