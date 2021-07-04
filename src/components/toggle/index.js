import './index.css';

/**
 * 
 * @param mattresses - A JSON object which contains the data of the mattresses
 * @param selectedMattress - The current selected mattress
 * @param setSelectedMattress - This handler is used to update the current selected mattress
 * @param selectedMattressInfo - The info of the selected mattress
 */
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
        {/** We iterate through the JSON object with Object.keys in order to render a toggle option for each mattress type in the object */}
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
