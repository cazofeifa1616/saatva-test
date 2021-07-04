import './index.css';
import Toggle from '../toggle'
import StarRating from '../star-rating';
import AddButton from '../button'

function Main(props) {
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
