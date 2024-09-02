import { useState } from "react";
import PropTypes from "prop-types";

const CadaAnimal = ({ animal, onBuscarGatito, onEscogerGatito, index }) => {
  const [flipped, setFlipped] = useState(false);

  const handleDiscard = async () => {
    setFlipped(true);
    onBuscarGatito(index);
    setTimeout(() => {
      setFlipped(false);
    }, 600);
  };
  return (
    <div className={`card ${flipped ? "flip" : ""}`}>
      <div className="card-inner">
        <div className="card-front">
          <img className="imagen" src={animal.url} alt={animal.id} />

          <div className="datos">
            <p>
              <strong>Id:</strong> {animal.id || "Desconocido"}
            </p>
          </div>
          <div className="btn">
            <button
              className="btn verde"
              onClick={() => onEscogerGatito(animal, index)}
            >
              Escoger
            </button>
            <button className="btn rojo" onClick={handleDiscard}>
              Descartar
            </button>
          </div>
        </div>
        <div className="card-back">
          <p>😒</p>
        </div>
      </div>
    </div>
  );
};

export default CadaAnimal;

CadaAnimal.propTypes = {
  animal: PropTypes.shape({
    url: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    height: PropTypes.number,
    width: PropTypes.number,
  }).isRequired,
  onBuscarGatito: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  onEscogerGatito: PropTypes.func.isRequired,
};
