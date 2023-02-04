import Header from "../../../components/header";
import Quill from "./quill";
import "./style.css";

export default function Admin() {
    return (
        <div className="admin">
            <Header />

            <div className="container">

                <span>Titulo</span>
                <input type="text" />

                <span>Descrição</span>
                <input type="text" />

                <div class="file-input-container">
                    <input type="file" />
                    <div class="file-input-button">Selecionar imagem</div>
                </div>

                <span>Referência da imagem</span>
                <input type="text" />

                <Quill />

                <button className="send">Enviar</button>
            </div>
        </div>
    );
}