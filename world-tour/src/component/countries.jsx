import React, { use } from 'react';
import Country from './country/country';
import './countries.css'

const Countries = ({ countriesPromise }) => {
    const countryData =use(countriesPromise);
    // console.log(countryData);   
    const shownCountries = countryData.countries;
    // console.log(shownCountries);
    return (
        <div>
            <h3>Countries Size :{shownCountries.length}</h3>
           <div className='countries'>
             {
                shownCountries.map(country => <Country key={country.ccn3.ccn3} country={country} />)
            }
           </div>
        </div>
    );
};

export default Countries;