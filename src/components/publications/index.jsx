import "./style.css";
import { Link } from "react-router-dom";
import Date from "../../pages/new/date";

export default function Publications(props) {

    console.log(props)

    return (
        <Link to={"/new/" + props.id}>
            <div className="publications">
                <img src={props.image} alt="base64 image" />

                <div className="text">
                    <p>{props.title}</p>

                    <Date postedAt={props.date}></Date>
                </div>
            </div>
        </Link>
    );
}
