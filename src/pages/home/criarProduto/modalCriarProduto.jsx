export default function ModalCriarProduto({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="criar-produto-overlay">
      <div className="criar-produto-content">
        <button className="close-btn" onClick={onClose}>X</button>
        {children}
      </div>
    </div>
  );
}