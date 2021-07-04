import cart from '../../assets/images/shopping-cart.svg'
import logo from '../../assets/images/logo.png'
import './index.css';

/**
 * 
 * @param cartCount - The current amount of items in the shopping cart
 */
function Header({ cartCount }) {
  return (
    <header className="header">
      <div className="header-wrapper">
        <img src={logo} className="logo" alt="logo" />
        <div className="cart-wrapper">
          <img src={cart} className="cart" alt="cart" />
          <span className="badge">{cartCount}</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
