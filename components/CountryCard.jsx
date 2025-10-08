import {Link} from 'react-router-dom'
export default function CountryCard({flag,name,population,region,capital}) {
  return (
    <Link className="countryCard" to={`/${name}`}>
      <div className="shimmer-image">
        <img src={flag} alt={name} />
      </div>
      <div className="shimmer-text">
        <h2 className='shimmer-title'>{name}</h2>
        <p>
            <strong>Population: </strong>{population}
        </p>
        <p>
            <strong>Region: </strong>{region}
        </p>
        <p>
            <strong>Capital: </strong>{capital}
        </p>
      </div>
        
    </Link>
  )
}
