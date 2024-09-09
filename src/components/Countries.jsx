import React, { useState } from 'react';
import useCountryInfo from '../Hooks/useCountryInfo.jsx';
import { Link } from 'react-router-dom';

export default function CountryContainer() {
    const { countries, loading, error } = useCountryInfo();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedRegion, setSelectedRegion] = useState('');

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    // Filter countries based on search term and selected region
    const filteredCountries = countries.filter(country => {
        const matchesSearchTerm = country.name.common.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesRegion = selectedRegion ? country.region.toLowerCase() === selectedRegion.toLowerCase() : true;
        return matchesSearchTerm && matchesRegion;
    });

    return (
        <>
            {/* Search and Filter UI */}
            <div className='flex flex-col md:flex-row justify-evenly items-center mt-4 p-4 mb-4'>
                <div className='flex items-center border rounded-md p-2 w-full md:w-auto mb-2 md:mb-0'>
                    <ion-icon name="search-outline" className="text-gray-500 mr-2"></ion-icon>
                    <input
                        className='outline-none placeholder-black flex-grow'
                        type="text" 
                        placeholder='Search Country'
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                <div className='mt-2 md:mt-0'>
                    <select 
                        className='border rounded-md p-2'
                        value={selectedRegion}
                        onChange={(e) => setSelectedRegion(e.target.value)}
                    >
                        <option value="">Filter by Region</option>
                        <option value="asia">Asia</option>
                        <option value="africa">Africa</option>
                        <option value="europe">Europe</option>
                        <option value="oceania">Oceania</option>
                    </select>
                </div>
            </div>

            {/* Country Cards */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
                {filteredCountries.map((country, index) => (
                    <div 
                        key={index}
                        className='rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden transition-transform transform hover:scale-105'
                    >
                        <Link to={`/country/${country.name.common.toLowerCase()}`}>
                            <img 
                                src={country.flags.svg} 
                                alt={`${country.name.common} flag`} 
                                className='w-full h-32 object-cover rounded-t-lg'
                            />      
                        </Link>
                        
                        <div className='p-4'>
                            <p className='text-lg font-semibold'>{country.name.common}</p>
                            <p>Region: <b>{country.region}</b></p>
                            <p>Capital: <b>{country.capital ? country.capital[0] : 'N/A'}</b></p>
                            <p>Population: <b>{country.population.toLocaleString()}</b></p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
