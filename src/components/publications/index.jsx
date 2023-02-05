import "./style.css";
import { Link } from "react-router-dom";

export default function Publications(props) {

    return (
        <Link to={"/new/" + props.id}>
            <div className="publications">
                <img src={props.image} alt="base64 image"/>

                <div className="text">
                    <p>{props.title}</p>

                    <span>Há 30 minutos • Brasil</span>
                </div>
            </div>
        </Link>
    );
}
