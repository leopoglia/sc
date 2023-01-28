import "./style.css"
import { Link } from "react-router-dom";

export default function NewMini() {
    return (
        <Link to="/new/1">
            <div className="new-mini">

                <div className="text">
                    <p>Deputado diz que bancada do agronegócio está ‘receosa’ e ‘assustada’ com governo Lula</p>

                    <span>Há 30 minutos • Brasil</span>
                </div>
            </div>
        </Link>
    );
}