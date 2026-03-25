import React, { use, useState } from 'react';
import Country from './country/country';
import './countries.css'

const Countries = ({ countriesPromise }) => {
    const countryData =use(countriesPromise);
    // console.log(countryData);   
    const shownCountries = countryData.countries;
    // console.log(shownCountries);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const handleVisitedCountry = (country) => {
        // console.log("Visited Country:", country);
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }
    return (
        <div>
            <h3>Countries Size :{shownCountries.length}</h3>
            <h5>Visited Country:{visitedCountries.length}</h5>
            <ul>
                {visitedCountries.map(country => (
                    <li key={country.ccn3.ccn3}>{country.name.common}</li>
                ))}
            </ul>
           <div className='countries'>
             {
                shownCountries.map(country => <Country
                     key={country.ccn3.ccn3}
                      country={country} 
                     handleVisitedCountry={handleVisitedCountry} />)
            }
           </div>
           
        </div>
    );
};

export default Countries;