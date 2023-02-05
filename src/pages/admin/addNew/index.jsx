import Header from "../../../components/header";
import Quill from "./quill";
import "./style.css";
import Services from "../../../services";
import { useState } from "react";

export default function Admin() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [imageRef, setImageRef] = useState('');
    const [content, setContent] = useState('');

    function sendNew() {

        // if (title === '' || description === '' || image === '' || imageRef === '' || content === '') {
        //     alert('Preencha todos os campos');
        //     return;
        // }

        const data = {
            title: title,
            description: description,
            image: image,
            imageRef: imageRef,
            content: content
        }


        Services.saveNew(data).then((response) => {
            if (response.status === 200) {
                alert('Notícia enviada com sucesso');
            }
            console.log(response)
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <div className="admin">
            <Header />

            <div className="container">

                <span>Titulo</span>
                <input onChange={(e) => setTitle(e.target.value)} type="text" />

                <span>Descrição</span>
                <input onChange={(e) => setDescription(e.target.value)} type="text" />

                <div className="file-input-container">
                    <input onChange={(value) => setImage(value)} type="file" />
                    <div className="file-input-button">Selecionar imagem</div>
                </div>

                <span>Referência da imagem</span>
                <input onChange={(e) => setImageRef(e.target.value)} type="text" />

                <Quill setContent={setContent} content={content} />

                <button onClick={() => sendNew()} className="send">Enviar</button>
            </div>
        </div>
    );
}