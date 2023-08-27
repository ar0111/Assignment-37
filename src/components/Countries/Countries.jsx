import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])

    return (
        <div>
            <h1>All Countries</h1>
            <div className="countries">
                {
                    countries.map(country => <Country 
                        key={country.cca2}
                        // name={country?.name?.common}
                        // population = {country.population}
                        // area = {country.area}
                        // flags = {country.flags}
                        country={country}
                        ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;