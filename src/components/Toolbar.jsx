export default function Toolbar({ filters, selected, onSelectFilter}) {
    function onSelectFilter() {
      console.log(selected)
    }
    const mappingFilters = filters.map(filter => 
      <button className={'filter-button'} onClick={onSelectFilter}>{filter}</button>
    )
  
    return(
      <ul className='filter-list'>{mappingFilters}</ul>
    )
};