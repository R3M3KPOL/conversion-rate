import "./Buttons.css";

const Buttons = ({resultValues}) => {
  const calculateResult = (event) => {
    event.preventDefault()
    console.log(`zaktualizowany stan`, resultValues)
  };

  return (
    <div className="actions">
      <button type="reset" className="buttonAlt">
        Reset
      </button>
      <button type="submit" className="button" onClick={calculateResult}>
        Calculate
      </button>
    </div>
  );
};

export default Buttons;
