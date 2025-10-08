import {useState } from 'react'
import SearchBar from './SearchBar'
import RegionFilter from './RegionFilter'
import CountryContainer from './CountryContainer'

export default function Home() {
  const [search, setSearch] = useState('')
  const [region, setRegion] = useState('All Countries')
  return (
    <main>
     
      <div className="filter">
        <SearchBar setSearch={setSearch} />
        <RegionFilter region={region} setRegion={setRegion} />
      </div>
      <CountryContainer search={search} region={region} />
    </main>
  )
}
