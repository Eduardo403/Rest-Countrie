import React from "react";

const MoreCountrieData = ({ datos, back, changerTheme }) => {
  const btnBack = () => {
    back();
  };
  return (
    <>
      {datos.map((el) => (
        <section className="bigt-conteiner" key={el.idd.suffixes}>
          <div className="lite-data-conteinet">
            <button
              onClick={btnBack}
              className={changerTheme ? "btn-back darck-elemet" : "btn-back"}
            >
              Back
            </button>
            <img src={el.flags.svg} alt={el.name.common} />
          </div>

          <div className="data-big-conteiner">
            <h2>{el.name.common}</h2>
            <div>
              <h4>population:</h4>
              {el.population}
            </div>
            <div>
              <h4>Reguion:</h4>
              {el.region}
            </div>
            <div>
              <h4>Sub Reguion:</h4>
              {el.subregion}
            </div>
            <div>
              <h4>Capital:</h4>
              {el.capital}
            </div>
            <a href={el.maps.googleMaps} target="_black">
              see on the Google map
            </a>
          </div>
        </section>
      ))}
    </>
  );
};

export default MoreCountrieData;
