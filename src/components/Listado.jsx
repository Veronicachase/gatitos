import { useEffect, useState } from "react";
import CadaAnimal from "./CadaAnimal";
import { useDispatch, useSelector } from "react-redux";
import { agregarGatitoEscogido } from "../store/miSlice";
import { Link } from "react-router-dom";
const apiGatitos =
  "https://api.thecatapi.com/v1/images/search?limit=1&api_key=live_FTJVNYMnbVbwigB2UpJFlthttx7Ol1fcQBYD9sZyaK9n5KdWMS1Tddpjgtl2tFbR";
const apiGatitos6 =
  "https://api.thecatapi.com/v1/images/search?limit=6&api_key=live_FTJVNYMnbVbwigB2UpJFlthttx7Ol1fcQBYD9sZyaK9n5KdWMS1Tddpjgtl2tFbR";
const Listado = () => {
  const [animales, setAnimal] = useState([]);

  const gatosEscogidos = useSelector(
    (state) => state.misGatitosEscogidos.Escogidos
  );
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(apiGatitos6)
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setAnimal(data);
        } else {
          console.error("La respuesta de la API no es la esperada", data);
        }
      })
      .catch((error) => {
        console.error("Error al obtener los datos", error);
      });
  }, []);
  //aqui puede ir en lugar de provisional un map para seleccionar uno a uno
  const buscarGatito = (indice) => {
    fetch(apiGatitos)
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          const nuevosAnimales = [...animales];
          const newAnimal = { ...data[0] };
          const img = new Image();
          img.src = newAnimal.url;
          img.onload = () => {
            nuevosAnimales[indice] = newAnimal;
          };
          setAnimal(nuevosAnimales);
        } else {
          console.error("La respuesta de la API no es la esperada", data);
        }
      })
      .catch((error) => {
        console.error("Error al obtener los datos", error);
      });
  };
  const escogerGatito = (animal, index) => {
    const newGatito = { ...animal, nivelDeTernura: 0 };
    dispatch(agregarGatitoEscogido(newGatito));
    
    buscarGatito(index);

  
  };

  return (
    <>
      <div className="title">
        <h3>Escoge y guarda tus gatitos favoritos </h3>
      </div>
      

      <div className="contenedor">
        {animales.slice(0, 6).map((animal, index) => (
          <CadaAnimal
            animal={animal}
            key={index}
            onBuscarGatito={buscarGatito}
            index={index}
            onEscogerGatito={escogerGatito}
          />
        ))}
      </div>
      <hr />
      <div className="gatos">
        {gatosEscogidos.map((animal, index) => {
          return (
            <>
              <button className="btn-id" key={index}>
                <Link to="/gestion">{animal.breeds?.name || animal.id}</Link>
              </button>
            </>
          );
        })}
      </div>
      <div>
        <button className="btn-link verde">
          <Link to="/gestion">Ir a mis escogidos</Link>
        </button>
      </div>
    </>
  );
};

export default Listado;
