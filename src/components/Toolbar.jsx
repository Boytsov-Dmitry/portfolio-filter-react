import listOfProjects from './data.json'

export default function Toolbar({ filters, selected, onSelectFilter}) {
    const updatedList = []

    function onSelectFilter() {
      for(const project of listOfProjects){
        if(project.category === filter) {
          updatedList.push(project)
          console.log(updatedList)
        }
      }
    }
    
    const mappingFilters = filters.map(filter => 
      <button className={'filter-button'} onClick={onSelectFilter}>{filter}</button>
    )
  
    return(
      <ul className='filter-list'>{mappingFilters}</ul>
    )
};