/* eslint-disable react/prop-types */

export const CountryComponent = ({country}) => {
  return (
      <div className="container">
        <section className="countries-grid">
          <a href="../pages/Details.jsx" className="country scale-effect" data-country-name={country.name} >
            <div className="country-flag">
            <img src={country.flag} alt={`${country.name} flag`} />
            </div>
            <div className="country-info">
              <h2 className="country-title">{country.name}</h2>
              <ul className="country-brief">
                <li><strong>population: </strong>{country.population}</li>
                <li><strong>Region: </strong>{country.region}</li>
                <li><strong>capital: </strong>{country.capital}</li>
              </ul>
            </div>
          </a>
        </section>
      </div>

  )};