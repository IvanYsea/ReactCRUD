import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PostForm from "../components/PostForm";
import { createPost } from "../services/posts.service";

function PostFormPage({ addPostLocal }) {
    const navigate = useNavigate();
    const [message, setMessage] = useState("");

    const handleSubmit = async (data) => {
        try {
            const newPost = await createPost(data);
            console.log(newPost);
            addPostLocal(newPost);

            setMessage("Post creado correctamente");

            setTimeout(() => {
                setMessage("");
            }, 5000);

        } catch (error) {
            setMessage(error.message);
            setTimeout(() => {
                setMessage("");
            }, 5000);
        }
    };

    return (
        <div>
            <h2>Crear nuevo post</h2>
            {message && <p className={message.includes("error") ? "error-message" : "success-message"}>{message}</p>}
            <PostForm onSubmit={handleSubmit}/>
            <button className="secondary-button" onClick={() => navigate("/")}>
                Volver al inicio
            </button>
        </div>
    );
}

export default PostFormPage;