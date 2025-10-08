export default function SearchBar({setSearch}) {
  return (
    <div className="searchBar">
        <i className="fa-solid fa-search"></i>
        <input onChange={(e) => setSearch(e.target.value)} type="text" id="search" placeholder="Enter Your Country..."/>
    </div>
  )
}
