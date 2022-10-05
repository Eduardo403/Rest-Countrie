import React, { useState, useEffect } from "react";
import DataBody from "./data_insert_body";
import Loadning from "./loading";
import Message from "./message";
import MoreCountrieData from "./more_data_countrie";
import SearchCountri from "./search_countrie";
import SelectCountries from "./select_countries";
import DarckMode from "./button_darck";

const ResCountrie = () => {
  /*state variables */
  const [dataErr, setDataErr] = useState(null);
  const [getApi, setGetApi] = useState(null);
  const [loading, setLoading] = useState(false);
  const [db, setDb] = useState([]);
  const [moreData, setMoreData] = useState();
  const [changer, setChanger] = useState(false);
  const [changerTheme, setChangerTheme] = useState();

  /*more data about a country and access to search in google maps */
  const detailCountries = (data) => {
    setDb([]);
    setDataErr(null);
    setChanger(true);
    let countrieDetail = `https://restcountries.com/v3.1/name/${data}`;
    setGetApi(countrieDetail);
  };
  /*call the country by name */
  const searchCountrie = (data) => {
    setDb([]);
    setDataErr(null);
    setMoreData();
    setChanger(false);
    let nameCountrie = `https://restcountries.com/v3.1/name/${data}`;
    setGetApi(nameCountrie);
  };
  /*call the various country by region */
  const selectRegion = (data) => {
    setDb([]);
    setDataErr(null);
    setMoreData();
    setChanger(false);
    let url;
    if (data === "all") {
      url = `https://restcountries.com/v3.1/`;
    } else {
      url = `https://restcountries.com/v3.1/region/`;
    }
    let nameRegion = `${url}${data}`;
    setGetApi(nameRegion);
  };
  /*btn back for more data  */
  const back = () => {
    setChanger(false);
    setMoreData();
    setGetApi(`https://restcountries.com/v3.1/all`);
  };
  /****userEfect to control all requests to the api ,
    and will control the passing of data ****/
  useEffect(() => {
    let abortController = new AbortController();
    let signal = abortController.signal;
    const getCountrie = async () => {
      setLoading(true);
      try {
        let res = await fetch(getApi);
        if (!res.ok) {
          let errorData = {
            err: true,
            status: res.status,
            statusText: !res.statusText ? "ocurrio un error " : res.statusText,
          };
          throw errorData;
        }
        let data = await res.json();
        if (!changer) {
          if (!signal.abort) {
            setDb(data);
            setDataErr(null);
          }
        } else {
          setMoreData(data);
          setDataErr(null);
        }
      } catch (err) {
        setDb([]);
        setDataErr(err);
      } finally {
        setLoading(false);
      }
    };
    getCountrie();
    return () => abortController.abort();
  }, [getApi, changer]);

  if (!getApi && !dataErr) {
    setDb([]);
    setChanger(false);
    setGetApi(`https://restcountries.com/v3.1/all`);
  }

  return (
    <>
      <header className={changerTheme ? "header darck-elemet" : "header"}>
        <h1>Where in the world?</h1>
        <DarckMode setChangerTheme={setChangerTheme} />
      </header>
      <section>
        <SearchCountri
          searchCountrie={searchCountrie}
          changerTheme={changerTheme}
        />
        <SelectCountries
          selectRegion={selectRegion}
          changerTheme={changerTheme}
        />
      </section>
      <main>
        {loading && (
          <div className="content-loadin">
            <Loadning />
          </div>
        )}
        {dataErr && (
          <Message
            msg={`Error:${dataErr.status} Countrie : ${dataErr.statusText}`}
          />
        )}
        <section className="main-destok">
          {db && (
            <DataBody
              datosCountries={db}
              detailCountries={detailCountries}
              changerTheme={changerTheme}
            />
          )}
        </section>

        {moreData && (
          <MoreCountrieData
            datos={moreData}
            back={back}
            changerTheme={changerTheme}
          />
        )}
      </main>
    </>
  );
};

export default ResCountrie;
