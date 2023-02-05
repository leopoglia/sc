import Header from "../../../components/header";
import Quill from "./quill";
import "./style.css";
import Services from "../../../services";
import axios from "axios";
import { useState } from "react";

export default function Admin() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [link, setLink] = useState('');
    const [imageRef, setImageRef] = useState('');
    const [content, setContent] = useState('');

    async function handleUpload () {
        const formData = new FormData();
        formData.append("image", image);

        try {
            const response = await axios.post('https://api.imgur.com/3/image', formData, {
                headers: {
                    'Authorization': 'Client-ID 8a23bab2b0d8ef5'
                }
            });

            return response.data.data.link;
        } catch (error) {
            console.error(error);
            return 0;
        }
    };


    async function sendNew() {

        // if (title === '' || description === '' || image === '' || imageRef === '' || content === '') {
        //     alert('Preencha todos os campos');
        //     return;
        // }

        const imageLink = await handleUpload();

        if (imageLink === 0) {
            alert('Erro ao enviar imagem');
            return;
        }

        const data = {
            title: title,
            description: description,
            image: imageLink,
            imageRef: imageRef,
            content: content
        }


        Services.saveNew(data).then((response) => {
            if (response.status === 200) {
                alert('Notícia enviada com sucesso');
            }
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
                    <input onChange={e => setImage(e.target.files[0])} type="file" />
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