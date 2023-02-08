import "./style.css";
import { Link } from "react-router-dom";
import Date from "../../pages/new/date";
import { useNavigate } from "react-router-dom";

export default function Publications(props) {
    const navigate = useNavigate();

    const redirect = () => {
        const news = {
            id: props.id,
            title: props.title,
            description: props.description,
            image: props.image,
            imageRef: props.imageRef,
            content: props.content,
            date: props.date
        }

        localStorage.setItem('new', JSON.stringify(news));
        
        navigate("/new/" + props.id);
    };

    return (
        <div onClick={()=> redirect()} className="publications">
            <img src={props.image} />

            <div className="text">
                <p>{props.title}</p>

                <Date postedAt={props.date}></Date>
            </div>
        </div>
    );
}
