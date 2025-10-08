export default function RegionFilter({region,setRegion}) {
  return (
    <select id="regionFilter" value={region} onChange={(e) => setRegion(e.target.value)}>
        <option value="All Countries">All Countries</option>
        <option value="Asia">Asia</option>
        <option value="Africa">Africa</option>
        <option value="Europe">Europe</option>
        <option value="Americas">Americas</option>
        <option value="Oceania">Oceania</option>
    </select>
  )
}
