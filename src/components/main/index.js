import './index.css';
import Toggle from '../toggle'
import StarRating from '../star-rating';
import AddButton from '../button'

/**
 * 
 * @param props.mattresses - A JSON object which contains the data of the mattresses
 * @param props.selectedMattress - The current selected mattress
 * @param props.setSelectedMattress - This handler is used to update the current selected mattress
 * @param props.setCartCount - This handler is used to update the current amount of items in the shopping cart
 * @param props.cartCount - The current amount of items in the shopping cart
 */
function Main(props) {
  // Get the selected mattress info from the JSON object
  const selectedMattressInfo = Object.values(props.mattresses)[props.selectedMattress]
  return (
    <main className="main">
      <div className="main-wrapper">
        <img
          src={process.env.PUBLIC_URL + selectedMattressInfo.imageFileName}
          className="mattress-image"
          alt={selectedMattressInfo.name}
          width="568" />
        <div>
          <h1 className="title">Choose Your Mattress</h1>
          <Toggle
            mattresses={props.mattresses}
            selectedMattress={props.selectedMattress}
            setSelectedMattress={props.setSelectedMattress}
            selectedMattressInfo={selectedMattressInfo}>
          </Toggle>
          <div className="rating-container">
            <StarRating
              rating={selectedMattressInfo.reviewRating}
              outOf={5}>
            </StarRating>
          </div>
          <AddButton
            setCartCount={props.setCartCount}
            cartCount={props.cartCount}>
          </AddButton>
        </div>
      </div>
    </main>
  );
}

export default Main;
