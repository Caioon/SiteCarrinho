export default function Modal({ isOpen, onClose, update, children }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>X</button>
        {children}
        <button onClick={update}>Atualizar</button>
      </div>
    </div>
  );
}

