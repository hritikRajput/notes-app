import "./Modal.css";

export default function Modal({ title, description, onClose }) {
    { console.log("I am in Modal") }
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
