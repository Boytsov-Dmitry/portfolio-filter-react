import { v4 as uuidv4 } from 'uuid'

export default function Toolbar({ filters, onSelectFilter, selected }) {
  const mappingFilters = filters.map(filter => 
    <li className='button-container' key={uuidv4()}>
      <button className={selected===filter ? 'filter-button selected' : 'filter-button'} onClick={() => onSelectFilter(filter)}>{filter}</button>
    </li>
  )
  
  return(
    <ul className='filter-list'>{mappingFilters}</ul>
  )
};