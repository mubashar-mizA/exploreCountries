import React from 'react';
import { useParams } from 'react-router-dom';
import useCountryInfo from '../Hooks/useCountryInfo';

export default function CountryDetail() {
    const { countryName } = useParams();
    const { countries, loading, error } = useCountryInfo();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const country = countries.find(c => c.name.common.toLowerCase() === countryName.toLowerCase());

    if (!country) return <p>Country not found</p>;

    return (
        <div className='flex border min-h-[50vh] bg-blue-500'>
            <img src={country.flags.svg} className='max-w-sm' alt={`${country.name.common} flag`} />
            <div>
                <h1>{country.name.common}</h1>
                <p>Region: <b>{country.region}</b></p>
                <p>Capital: <b>{country.capital ? country.capital[0] : 'N/A'}</b></p>
                <p>Population: <b>{country.population.toLocaleString()}</b></p>
                <p>Border Countries : <b></b></p>
                <p>Languages : <b></b></p>
                <p>Sub Region : <b></b></p>
                <p>Top level domain : <b></b></p>
                
            </div>
        </div>
    );
}
