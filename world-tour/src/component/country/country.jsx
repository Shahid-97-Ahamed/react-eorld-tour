import React, { useState } from 'react';
import './country.css'

const Country = ({country, handleVisitedCountry}) => {
    // console.log(country.continents.name);
    const [showInfo, setShowInfo] = useState(true);
    const btnhandele=()=>{
        setShowInfo(!showInfo);
        handleVisitedCountry(country);
    }
  
    return (
        <div className={`country ${showInfo ? 'country-clicked btn2' : ''}`}>
            <img src={country.flags.flags.png} alt={country.name.common} />
            <h3>name: {country.name.common}</h3>
            <h4>Population: {country.population.population}</h4>
            <h5>Language:{country.languages.languages.eng} {country.languages.languages.eng === "English" ? "" : "Other Language"}</h5>
            <button className={"btn "} onClick={btnhandele}>
                {showInfo ? "Checked" : "Unchecked"}
            </button>
        </div>
    );
};

export default Country;