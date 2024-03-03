import './searchBar.css'
const SearchBar = () => {
  return (
    <div className="bar row p-2 align-items-center">
    <div className="location col-12 col-sm-5">
      <p className='searchBar_label'>Service</p>
      <input type="text" className='search__input' placeholder="Que vous voulez"  />
    </div>
    <div className="check-in col-9 col-sm-5">
      <p className='searchBar_label'>Emplacement</p>
      <input type="text" className='search__input' placeholder="choisi votre emplacement" />
    </div>
    <div className='col-3 mx-auto col-sm-2'>
    <div className='search-container'>
    <i className="bi bi-search"></i>
    </div>
    </div>
    <span className='top-50 translate-middle-y col-lg-2' style={{ position: 'absolute', right: '1rem' }}>
    </span>
  </div>
  )
}

export default SearchBar