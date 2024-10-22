import { useState } from "react";
import "./Country.css";

const Country = ({ country, handleVisitedCountries }) => {
  const { name, flags, population, area, cca3 } = country;

  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
  };

  console.log(handleVisitedCountries);

  return (
    <div className={`country ${visited ? "visited" : "non-visited"}`}>
      <h3 style={{ color: visited ? "tomato" : "black" }}>{name?.common}</h3>
      <img className="" src={flags.png}></img>
      <p>Population: {population}</p>
      <p>Area: {area}</p>
      <p>
        <small>Code :{cca3}</small>
      </p>
      <button>Mark Visited</button>
      <br />
      <button onClick={handleVisited}>{visited ? "Visited" : "Going"}</button>
      {visited ? "I have Visited This Country." : "I want to visit."}
    </div>
  );
};

export default Country;
