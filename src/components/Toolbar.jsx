export default function Toolbar({ filters, selected, onSelectFilter}) {
    function onSelectFilter() {
      console.log(filter)

      console.log("Из тулбара " + selected)
      // for(const project of listOfProjects){
      //   if(project.category === selected) {
      //     // updatedList.push(project)
      //   }
      // }
    }

    const mappingFilters = filters.map(filter => 
      <button className={'filter-button'} onClick={onSelectFilter}>{filter}</button>
    )
  
    return(
      <ul className='filter-list'>{mappingFilters}</ul>
    )
};