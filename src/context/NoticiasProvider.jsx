import { createContext, useEffect, useState } from "react";

import general from "../Jsons/General.json";
import sports from "../Jsons/Sports.json";
import business from "../Jsons/Business.json";
import entertainment from "../Jsons/Entertainment.json";
import health from "../Jsons/Health.json";
import science from "../Jsons/Science.json";
import technology from "../Jsons/Technology.json";
import shuffleArray from "../utils/utils";

const NoticiasContext = createContext();

const NoticiasProvider = ({ children }) => {
  const [categoria, setCategoria] = useState("general");

  const [noticias, setNoticias] = useState([]);

  const [pagina, setPagina] = useState(1);

  const [totalNoticias, setTotalNoticias] = useState(0);

  useEffect(() => {
    const cargarDatosDeCategoria = () => {
      let data = [];
      let totalResults = 0;

      switch (categoria) {
        case "general":
          data = general;
          totalResults = general.totalResults;
          break;
        case "sports":
          data = sports;
          totalResults = sports.totalResults;
          break;
        case "business":
          data = business;
          totalResults = business.totalResults;
          break;
        case "entertainment":
          data = entertainment;
          totalResults = entertainment.totalResults;
          break;
        case "health":
          data = health;
          totalResults = health.totalResults;
          break;
        case "science":
          data = science;
          totalResults = science.totalResults;
          break;
        case "technology":
          data = technology;
          totalResults = technology.totalResults;
          break;
        default:
          data = general;
          totalResults = general.totalResults;
      }
      const shuffledArticles = shuffleArray(data.articles);

      setNoticias(shuffledArticles);
      setTotalNoticias(totalResults);
      setPagina(1);
    };

    cargarDatosDeCategoria();
  }, [categoria]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pagina]);

  const handleChangeCategoria = (e) => {
    setCategoria(e.target.value);
  };

  const handleChangePagina = (e, valor) => {
    setPagina(valor);
  };

  return (
    <NoticiasContext.Provider
      value={{
        categoria,
        handleChangeCategoria,
        noticias,
        totalNoticias,
        handleChangePagina,
        pagina,
      }}
    >
      {children}
    </NoticiasContext.Provider>
  );
};
export { NoticiasProvider };
export default NoticiasContext;
