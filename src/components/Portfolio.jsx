import { useState } from 'react'
import Toolbar from './Toolbar'
import listOfProjects from './data.json';
import { v4 as uuidv4 } from 'uuid'
import ProjectList from './ProjectList';

listOfProjects.map((project) => project.id=uuidv4())
const listWithID = listOfProjects

export default function Portfolio() {
    const filters = ["All", "Websites", "Flayers", "Business Cards"]
    


    const [list, setList] = useState(listWithID);

    
    const [selected, setSelected] = useState("All");
  
    function onSelectFilter(filter) {
      setSelected()
      if(filter==='All') {
        setList(listWithID)
      } else {
        setList(listWithID.filter(listItem => listItem.category===filter))
      }

      // if(filter==='All') {
      //   setSelected(filter)
      // }
    }

    return(
      <div>
        <Toolbar filters={filters} selected={selected} onSelectFilter={onSelectFilter} />
        <ProjectList list={list}/>
      </div>
    );
};