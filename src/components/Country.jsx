import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useCountryInfo from '../Hooks/useCountryInfo.js';

export default function CountryDetail() {
    const { countryName } = useParams();
    const { countries, loading, error } = useCountryInfo();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const country = countries.find(c => c.name.common.toLowerCase() === countryName.toLowerCase());

    if (!country) return <p>Country not found</p>;

    // Find border countries and their official websites
    const borderCountries = country.borders ? 
        countries.filter(c => country.borders.includes(c.cca3)) : 
        [];

    return (
        <div className='relative lg:h-[80vh] lg:flex items-center lg:justify-center p-3 m-1 border'>
            {/* Back Link */}
            <Link to='/' className='absolute top-4 right-4 text-black hover:underline'>
                &larr; Back
            </Link>
            
            <div className='flex flex-col lg:flex-row lg:justify-evenly 
               items-center justify-center gap-6
                
            '>

                <div className='flex-shrink-0'>
                    <img src={country.flags.svg} className='w-full lg:w-64 h-auto rounded-md shadow-lg' alt={`${country.name.common} flag`} />
                </div>

                <div className='text-center lg:text-left
                    lg:flex  gap-4
                '>
                    <div>
                        <h1 className='text-2xl font-bold mb-2'>{country.name.common}</h1>
                        <p className='text-lg'>Region: <b>{country.region}</b></p>
                        <p className='text-lg'>Sub Region: <b>{country.subregion || 'N/A'}</b></p>
                        <p className='text-lg'>Languages: <b>{Object.values(country.languages).join(', ') || 'N/A'}</b></p>
                        <p className='text-lg'>Top Level Domain: <b>{country.tld ? country.tld.join(', ') : 'N/A'}</b></p>
                        <p className='text-lg'>Currencies: <b>{Object.values(country.currencies).map(c => c.name).join(', ') || 'N/A'}</b></p>
                    </div>

                    <div>
                        <p className='text-lg'>Capital: <b>{country.capital ? country.capital[0] : 'N/A'}</b></p>
                        <p className='text-lg'>Population: <b>{country.population.toLocaleString()}</b></p>
                        <p className='text-lg'>Border Countries: 
                            {borderCountries.length > 0 ? (
                            <ul className='lg:pl-5'>
                                {borderCountries.map(borderCountry => (
                                    <li key={borderCountry.cca3}
                                        className='flex'
                                    >
                                        <button 
                                            className=' hover:underline'
                                            onClick={() => window.open(borderCountry.officialWebsite, '_blank')}
                                        >
                                            {borderCountry.name.common}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                            ) : (
                                <span className='text-red-600 ml-4'>None</span> // Using <span> instead of <p> for inline display
                            )}
                        </p>


                    </div>

                    
                    <div>
                        
                    </div>
                </div>

            </div>

        </div>
    );
}
