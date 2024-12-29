import {CountryComponent} from "../components/Country";
import countryData from "../assets/CountriesData";
import {Header,Scroll,Dropdown} from "../components/Header";
import { useState } from "react";


export const Home = () => {
    
    const [searchQuery, setSearchQuery] = useState(""); 

    const filterCountries = countryData.filter((country)=>{
        if (searchQuery === "") {
            return true;
        }
        return country.name.toLowerCase().includes(searchQuery.toLowerCase());
    });

    return (
        <>
            <Scroll/>
            <Header/>

            <div>
                <section className="filters">
                    <div className="container">
                        <div className="search-wrapper">
                        <i className="fa-regular fa-magnifying-glass search-icon"></i>
                        <input
                            type="text"
                            className="search-input"
                            placeholder="Search for a country..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        </div>
                        <Dropdown/>
                    </div>
                </section>
            
                <main className="main">
                    <div className="container">
                        <section className="countries-grid">
                            {filterCountries.map((country,index) => (
                            <CountryComponent key={index} country={country} />
                        ))}
                        </section>
                    </div>
                </main>
            </div>
        </>
    );
};

