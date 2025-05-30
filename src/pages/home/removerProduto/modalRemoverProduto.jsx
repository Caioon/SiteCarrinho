export default function ModalRemoverProduto({ isOpen, onClose, remove, children }){
    return (
    <div className="modal-remove-overlay">
      <div className="modal-remove-content">
        <button className="close-btn" onClick={onClose}>X</button>
        <h1>Deseja remover o produto?</h1>
        {children}
        <button onClick={remove}>Remover</button>
      </div>
    </div>
    );
}