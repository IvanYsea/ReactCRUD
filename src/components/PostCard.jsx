import { Link } from "react-router-dom";
import { useState } from "react";
import ConfirmDeleteModal from "./ConfirmDeleteModal";
import { deletePost } from "../services/posts.service";

function PostCard({ post, onDeleteLocal }) {
    const [showModal, setShowModal] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);

    const handleDelete = async () => {
        setIsDeleting(true);
        try {
            await deletePost(post.id);
            onDeleteLocal(post.id);
        } catch (error) {
            console.error(error.message);
        } finally {
            setIsDeleting(false);
            setShowModal(false);
        }
    };

    return (
        <div className="post-card">
            <h3>{post.title}</h3>
            <p>
                {post.body.length > 100
                    ? `${post.body.slice(0, 100)}...`
                    : post.body}
            </p>
            <div>
                <Link to={`/posts/${post.id}`} className="secondary-button">
                    Ver detalle
                </Link>
                <Link to={`/edit/${post.id}`} className="primary-button">
                    Editar
                </Link>
                <button 
                    onClick={() => setShowModal(true)} 
                    className="danger-button"
                    disabled={isDeleting}
                >
                    {isDeleting ? "Eliminando..." : "Eliminar"}
                </button>
            </div>
            <ConfirmDeleteModal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                onConfirm={handleDelete}
            />
        </div>
    );
}

export default PostCard;