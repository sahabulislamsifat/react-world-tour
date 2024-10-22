import { useEffect, useState } from "react";
import Country from "../country/Country";
import "./countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  const [visitedCountries, setVisitedCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => setCountries(data));
  });

  const handleVisitedCountries = (country) => {
    console.log("added to visited country location");

    console.log(country);
  };

  return (
    <div>
      <h3>Countries{countries.length}</h3>
      <div className="display-container">
        {countries.map((country) => (
          <Country
            handleVisitedCountries={handleVisitedCountries}
            key={country.cca3}
            country={country}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
