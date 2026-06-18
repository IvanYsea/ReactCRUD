import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PostForm from "../components/PostForm";
import { updatePost } from "../services/posts.service";

function PostEditPage({ posts, updatePostLocal }) {
    const { id } = useParams();
    const navigate = useNavigate();
    const [message, setMessage] = useState("");
    const [postToEdit, setPostToEdit] = useState(null);

    useEffect(() => {
        const post = posts.find((p) => p.id === parseInt(id));
        if (post) {
            setPostToEdit(post);
        }
    }, [id, posts]);

    const handleSubmit = async (data) => {
        try {

            if (parseInt(id) > 100) { // si el post es local
                updatePostLocal({
                    ...data,
                    id: parseInt(id)
                });

                setMessage("Post actualizado correctamente");
                setTimeout(() => {
                    setMessage("");
                }, 5000);

                return;
            }

            const updatedData = await updatePost(id, data); // si el post es de la API

            updatePostLocal({
                ...updatedData,
                id: parseInt(id)
            });

            setMessage("Post actualizado correctamente");
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

    if (!postToEdit) {
        return <h2 className="loading-spinner">Cargando datos...</h2>;
    }

    return (
        <div>
            <h2>Editar post</h2>
            {message && <p className={message.includes("error") ? "error-message" : "success-message"}>{message}</p>}
            <PostForm onSubmit={handleSubmit} initialData={postToEdit} />
            <button className="secondary-button" onClick={() => navigate("/")}>
                Volver al Inicio
            </button>
        </div>
    );
}

export default PostEditPage;