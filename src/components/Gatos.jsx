import PropTypes from "prop-types";

import { useState } from "react";
import { rango } from "../utils/rango";
import ProgressBar from "./ProgressBar";

const Gatos = ({ animal, index, onUpdate, onDelete }) => {
  const storedLevel =localStorage.getItem(`nivelDeTernura_${animal.id}`)
  const [selectedLevel, setSelectedLevel] = useState(storedLevel ? Number(storedLevel): 0);

  const handleSelectChange = (e) => {
    const selectedNumber = Number(e.target.value);
    setSelectedLevel(selectedNumber);
    onUpdate({ index, level: selectedNumber });
    localStorage.setItem(`nivelDeTernura_${animal.id}`,selectedNumber )
  };

  return (
    <div className="card2">
      <div className="innerCard">
        <img className="imagen sel" src={animal.url} alt={animal.id} />

        <div className="datos">
          <p>Nombre: {animal.id}</p>
        </div>
        <div>
          <select
            className="select"
            onChange={handleSelectChange}
            value={selectedLevel}
          >
            <option value="0">Selecciona el nivel de ternura</option>
            {rango.map((option, i) => (
              <option key={i} value={option.number}>
                {option.level}
              </option>
            ))}
          </select>
        </div>
        {selectedLevel > 0 && (
          <div>
            <ProgressBar level={selectedLevel} />
            <p>
              {rango.find((opcion) => opcion.number === selectedLevel).answer}
            </p>
          </div>
        )}
        <div>
          <button className=" btn rojo btn-eliminar" onClick={() => onDelete(index)}>
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gatos;
Gatos.propTypes = {
  animal: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};
