function ConfirmDeleteModal({ isOpen, onClose, onConfirm }) {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal">
                <h3>Confirmar eliminación</h3>
                <p>¿Estás seguro que deseas eliminar este post?</p>
                <div>
                    <button className="secondary-button" onClick={onClose}>
                        Cancelar
                    </button>
                    <button className="danger-button" onClick={onConfirm}>
                        Eliminar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ConfirmDeleteModal;