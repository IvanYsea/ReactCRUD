import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getPostById } from "../services/posts.service";

function PostDetailPage({ posts }) {
    const { id } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const postLocal = posts?.find(
            (p) => p.id === parseInt(id)
        );

        if (postLocal) {
            setPost(postLocal);
            setLoading(false);
            return;
        }

        const fetchPost = async () => {
            try {
                const data = await getPostById(id);
                setPost(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, [id, posts]);

    if (loading) {
        return <h2 className="loading-spinner">Cargando post...</h2>;
    }

    if (error) {
        return <div className="error-message">{error}</div>;
    }

    return (
        <div className="post-detail">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <button onClick={() => navigate("/")}>
                Volver al inicio
            </button>
        </div>
    );
}

export default PostDetailPage;