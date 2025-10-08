import React from 'react'
import { useState, useEffect } from 'react'

import './CountryDetails.css'
import { Link, useParams } from 'react-router-dom'
import CountryDetailsShimmer from './CountryDetailsShimmer'
export default function CountryDetails() {
  // const countryName = new URLSearchParams(location.search).get('name')
  const params = useParams()
  console.log(params)
  const countryName = params.country

  const [country, setCountry] = useState(null)
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {
        console.log(data)
        setCountry({
          name: data.name.common,
          flag: data.flags.png,
          population: data.population,
          region: data.region,
          capital: data.capital,
          currency: Object.values(data.currencies)[0].name,
          languages: Object.values(data.languages).join(', '),
          borders: [],
        })

        if (!data.borders) {
          data.borders = []
        }
        Promise.all(
          data.borders.map((border) => {
            return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
              .then((res) => res.json())
              .then(([countryBorders]) => countryBorders.name.common)
          })
        ).then((borders) => {
          setCountry((prevState) => ({ ...prevState, borders }))
          console.log(borders)
        })
      })
      .catch((error) => {
        console.log(error)
        setNotFound(true)
      })
  }, [countryName])

  if (notFound) {
    return <p>Country Not Found</p>
  }

  if (country === null) {
    return <CountryDetailsShimmer />
  }
  return (
    <div className="country-details">
      <button className="backButton" onClick={() => history.back()}>
        <i className="fa-solid fa-arrow-left"></i> Back
      </button>
      <div className="textContainer">
        <img src={country.flag} alt={country.name} />
        <div className="detailsText">
          <h2>{country.name}</h2>
          <div className="countryDetails">
            <p>Native Name:</p>
            <p>Population:{country.population}</p>
            <p>Region:{country.region}</p>
            <p>Capital:{country.capital}</p>
            <p>Currency:{country.currency}</p>
            <p>Languages:{country.languages}</p>
            {country.borders.length !== 0 && (
              <div className="border-countries">
                <b>Borders:</b>&nbsp;
                {country.borders.map((border) => (
                  <Link key={border} to={`/${border}`}>
                    {border}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
