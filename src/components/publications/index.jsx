import "./style.css";
import { Link } from "react-router-dom";

export default function Publications() {
    return (
        <Link to="/new/1">
            <div className="publications">
                <img src="https://classic.exame.com/wp-content/uploads/2023/01/BRASIL-3.jpg?quality=70&strip=info&w=1024" alt="" />

                <div className="text">
                    <p>Deputado diz que bancada do agronegócio está ‘receosa’ e ‘assustada’ com governo Lula</p>

                    <span>Há 30 minutos • Brasil</span>
                </div>
            </div>
        </Link>
    );
}
