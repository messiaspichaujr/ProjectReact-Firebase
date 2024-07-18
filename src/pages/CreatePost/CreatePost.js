import styles from './CreatePost.module.css'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthValue } from '../../context/AuthContext'
import { useInsertDocument } from '../../hooks/useInsertDocument'

const CreatePost = () => {

    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [body, setBody] = useState("");
    const [tags, setTags] = useState([]);
    const [formError, setFormError] = useState("");

    const {insertDocument, response} = useInsertDocument() 

    //função de envio
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormError("")

        // validação da url da img

        // criar o array de tags

        // checar todos os valores

        insertDocument({
            
        })
    };

    return (
        <div className={styles.create_post}>
            <h2>Criar post</h2>
            <p>Escreva sobre o que quiser e compartilhe seu conhecimento!</p>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Título:</span>

                    <input type="text" name="title" required placeholder="Título..."
                        onChange={(e) => setTitle(e.target.value)}
                        value={title} />

                </label>

                <label>
                    <span>URL da imagem:</span>

                    <input type="text" name="image" required placeholder="Insira uma imagem que representa o seu post"
                        onChange={(e) => setImage(e.target.value)}
                        value={title} />

                </label>

                <label>
                    <span>Conteúdo:</span>

                    <textarea name="body" required placeholder="Insira o conteúdo do post"
                        onChange={(e) => setBody(e.target.value)}
                        value={body}
                    ></textarea>

                </label>

                <label>
                    <span>tags:</span>

                    <input type="text" name="tags" required placeholder="Insira as tags separadas por vírgula"
                        onChange={(e) => setTags(e.target.value)}
                        value={tags} />

                </label>

                <button className="btn">Cadastrar</button>

                {/*{!loading && }

                {loading && (
                    <button className="btn" disabled>
                        Aguarde...
                    </button>

                )}

                {error && <p className="error">{error}</p>}*/}
            </form>
        </div>
    )
}

export default CreatePost