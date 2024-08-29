import React from 'react';
import useCountryInfo from '../Hooks/useCountryInfo';
import { Link } from 'react-router-dom';

export default function CountryContainer() {
    const { countries, loading, error } = useCountryInfo();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <>

            <div className=' flex
                justify-center items-center
                p-1 mt-3 font-nunito 
            '>

                <div className='border flex items-center
                    justify-center
                    flex-row-reverse py-1 px-1
                '>
                    <ion-icon name="search-outline" className="hover:cursor-pointer"></ion-icon>
                    <input
                        className='outline-none
                        placeholder:text-black
                        text-left
                        '
                        type="text" 
                        placeholder='Search Country'
                    />
                </div>

                <div className=''>
                    <select className=' 
                        justify-center p-1 border
                        outline-none ml-4 hover:cursor-pointer
                    '>
                        <option value="" >Filter by Region</option>
                        <option value="asia">Asia</option>
                        <option value="africa">Africa</option>
                        <option value="europe">Europe</option>
                        <option value="oceania">Oceania</option>

                    </select>
                </div>
            </div>

            <div className='flex flex-wrap justify-evenly
                gap-x-1 p-1 mt-3 
            '>


                {countries.map((country, index) => (
                    <div 
                        key={index}
                        className='  w-40 m-5 
                        rounded-xl shadow
                        border-gray-200 
                        dark:border-gray-700
                        '
                    >
                        <Link to={`/country/${country.name.common.toLowerCase()}`}>
                            <img 
                                src={country.flags.png} 
                                alt={`${country.name.common} flag`} 
                                className='rounded-md shadow
                                shadow-slate-300
                            '/>
                        </Link>
                        
                        <div className='mt-3 mb-3 pl-2'>
                            <p>{country.name.common}</p>
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