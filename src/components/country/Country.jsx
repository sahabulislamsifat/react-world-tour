import { useState } from "react";
import "./Country.css";
import CountryDetails from "../countryDetails/CountryDetails";

const Country = ({ country, handleVisitedCountries, handleVisitedFlags }) => {
  const { name, flags, population, area, cca3 } = country;

  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
  };

  return (
    <div className={`country ${visited ? "visited" : "non-visited"}`}>
      <h3 style={{ color: visited ? "tomato" : "black" }}>{name?.common}</h3>
      <img className="" src={flags.png}></img>
      <p>Population: {population}</p>
      <p>Area: {area}</p>
      <p>
        <small>Code :{cca3}</small>
      </p>
      <button onClick={() => handleVisitedCountries(country)}>
        Mark Visited
      </button>
      <button onClick={() => handleVisitedFlags(country.flags.png)}>
        Add Flags
      </button>
      <br />
      <button onClick={handleVisited}>{visited ? "Visited" : "Going"}</button>
      {visited ? "I have Visited This Country." : "I want to visit."}
      <hr />
      <CountryDetails
        country={country}
        handleVisitedCountries={handleVisitedCountries}
        handleVisitedFlags={handleVisitedFlags}
      ></CountryDetails>
    </div>
  );
};

export default Country;
