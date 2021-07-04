import './index.css';

/**
 * 
 * @param props.cartCount - The current shopping cart amount of items
 * @param props.setCartCount - The handler that updates the amount of items in the shopping cart
 */
function AddButton(props) {
  return (
    <button
      className="add-button"
      onClick={() => props.setCartCount(props.cartCount + 1)}>Add to Cart
    </button>
  );
}

export default AddButton;
