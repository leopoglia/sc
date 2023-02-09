import './style.css';
import { Link } from 'react-router-dom';

export default function ReadMore() {
    return (
        <div className="read-more">


            <div className="display-block">

                <p>Acompanhe as últimas notícias e atualizações, aqui no Senso Crítico.</p>

                <Link to="/">
                    <button className="btn-read-more">LEIA MAIS</button>
                </Link>
            </div>
        </div>
    )
}