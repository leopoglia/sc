import './style.css'

export default function Header() {
  return (
    <div className="header">
      <div className='logo'>
        <img src="/img/logo.png" alt="logo" />

        <p className='logo-new'>News</p>
      </div>

      <ul>
        <li>Notícias</li>
        <li>Política</li>
        <li>Econômia</li>
      </ul>
    </div>
  );
}