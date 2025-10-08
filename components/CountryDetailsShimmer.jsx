import React from 'react'

import './CountryDetailsShimmer.css'

export default function CountryDetailsShimmer() {
  return (
    <div className="country-details">
      {Array.from({ length: 1 }).map((el, i) => {
        return <div key={i} className="backButton shimmerButton"></div>
      })}
      <div className='textContainer'>
        {/* <div src={country.flag} alt={country.name} /> */}
        {  
            Array.from({length:1}).map((el,i) => 
            {
              return  <div key={i} className='shimmerImage'></div>
            })
        }
        <div className='detailsText'>
            {
                Array.from({length:1}).map((el,i) => 
                {
                    return <div key={i} className='shimmerHeading'></div>
                })
            }
            <div className='countryDetails'>
                {
                    Array.from({length:1}).map((el,i) => 
                    {
                        return <div key={i} className='shimmerText'></div>
                    })
                }
            </div>
                
            </div>
        </div>
      </div>
  )
}
