import { useEffect, useState } from 'react'
import CountryCard from './CountryCard'
import CountryContainerShimmer from './CountryContainerShimmer'

export default function CountryContainer({search, region}) {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    fetch(
      'https://restcountries.com/v3.1/all?fields=flags,name,population,region,capital'
    )
      .then((res) => res.json())
      .then((data) => setCountries(data))
  }, [])

  if(countries.length === 0)
  {
    return <CountryContainerShimmer/>
  }
  return (
    <div className="countryContainer">
      {countries
        .filter((country) => country.name.common.toLowerCase().includes(search) && 
        (region === 'All Countries' || country.region === region))
        .map((country) => (
          <CountryCard
            key={country.name.common}
            flag={country.flags.png}
            name={country.name.common}
            population={country.population}
            region={country.region}
            capital={country.capital}
          />
        ))}
    </div>
  )
}
