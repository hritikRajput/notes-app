import "./Modal.css";
import PropTypes from "prop-types"

export default function Modal({ title, description, onClose }) {
    return (
        <div className="modal-container">
            <div className="modal">
                <h1>{title}</h1>
                <p>{description}</p>
                <div className="close" onClick={onClose} >&times;</div>
            </div>
        </div>
    );
}

Modal.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    onClose: PropTypes.func,
}
