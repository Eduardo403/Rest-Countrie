import React from "react";

const DataBody = ({ datosCountries, detailCountries, changerTheme }) => {
  const clickForData = (e) => {
    detailCountries(e.target.textContent);
  };
  return (
    <>
      {datosCountries.map((el, index) => (
        <div
          className={
            changerTheme ? "data-conteiner darck-elemet" : "data-conteiner"
          }
          key={index}
        >
          <img src={el.flags.svg} alt={el.name.common} />
          <h2 onClick={clickForData}>{el.name.common}</h2>
          <div>
            <p>Population:{el.population}</p>
            <p>Reguion:{el.region}</p>
            <p>Capital:{el.capital}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default DataBody;
