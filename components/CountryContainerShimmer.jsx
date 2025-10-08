import './CountryContainerShimmer.css'

export default function CountryContainerShimmer() {
  return (
    <div className="countryContainer">
        {
            Array.from({length:250}).map((el,i) => 
            {
                return (
                <div key={i} className="countryCard shimmer-card">
                  <div className="shimmer-image"></div>
                     <div className="shimmer-text">
                      <h2 className='shimmer-title'></h2>
                      <p></p>
                      <p></p>
                      <p></p>
                  </div>
                </div>
              )
            })
        }
    </div>
  )
}
