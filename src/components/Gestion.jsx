import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Gatos from "./Gatos";
import { eliminarGatitoEscogido, modificarNumero } from "../store/miSlice";


const Gestion = () => {
  const dispatch = useDispatch();

  const actualizar = (level, index) => {
    dispatch(
      modificarNumero({
        indice: index,
        level: level,
      })
    );
  };

  const eliminar = (index) => {
    dispatch(eliminarGatitoEscogido(index));
  };

  const listaGatitos = useSelector(
    (state) => state.misGatitosEscogidos.Escogidos
    
  );

  console.log("Gatitos en Gestión:", listaGatitos)

  return (
    <>
    <div className="title">    
    <h3>Mis Gatitos</h3>
    </div>
    <h5>Asígnales un nivel de ternura</h5>
      <Link to="/gatitos">
        {" "}
        <button className="btn-id ">Regresar a lista</button>
      </Link>
      <div className="main">
        {listaGatitos.map((animal, index) => (
          <Gatos
            animal={animal}
            index={index}
            key={index}
            onUpdate={actualizar}
            onDelete={eliminar}
          />
        ))}
      </div>
    </>
  );
};

export default Gestion;
