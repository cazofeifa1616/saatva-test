import './index.css';

function StarRating({
  rating,
  outOf
}) {
  const percentage = rating / outOf * 100
  const roundedPercentage = `${(Math.round(percentage / 10) * 10)}%`

  return (
    <div>
      <div className="stars-outer" aria-label={`Rating of this product is ${rating} out of ${outOf}`}>
        <div className="stars-inner" style={{ width: roundedPercentage }}></div>
      </div>
      <span className="rating">({rating})</span>
    </div>
  );
}

export default StarRating;
