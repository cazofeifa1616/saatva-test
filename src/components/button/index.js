import './index.css';

function AddButton(props) {
  return (
    <button
      className="add-button"
      onClick={() => props.setCartCount(props.cartCount + 1)}>Add to Cart
    </button>
  );
}

export default AddButton;
