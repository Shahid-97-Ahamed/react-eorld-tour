import React, { use } from 'react';

const Countries = ({ countriesPromise }) => {
    const countryData =use(countriesPromise);
    // console.log(countryData);   
    const shownCountries = countryData.countries;
    console.log(shownCountries);
    return (
        <div>
            <h3>Countries Size :{shownCountries.length}</h3>
        </div>
    );
};

export default Countries;