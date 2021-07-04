import './index.css';

function Toggle({
  mattresses,
  selectedMattress,
  setSelectedMattress,
  selectedMattressInfo
}) {
  return (
    <div className="toggle">
      <h3 className="toggle-title">Select Mattress Type</h3>
      <div className="toggle-options">
        {
          Object.keys(mattresses).map((keyName, i) => (
            <div className="option" key={i}>
              <label aria-label={mattresses[keyName].name} htmlFor={'option' + i} className="label">
                <input
                  type="radio"
                  name="option"
                  id={'option' + i}
                  value={i}
                  checked={selectedMattress === i}
                  onChange={() => setSelectedMattress(i)}>
                </input>
                <div className={`button ${selectedMattress === i ? 'checked' : ''}`}>{mattresses[keyName].name}</div>
              </label>
            </div>
          ))
        }
      </div>
      <div className="toggle-subtitle">
        <span className="mattress-name">{selectedMattressInfo.name}</span>
        <span className="mattress-price">
          {selectedMattressInfo.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
        </span>
      </div>
    </div>
  );
}

export default Toggle;
