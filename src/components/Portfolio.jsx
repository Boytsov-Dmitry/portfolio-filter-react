import { useState } from 'react'
import Projects from './ProjectList'
import Toolbar from './Toolbar'
import listOfProjects from './data.json';


const item = {
    filters: ["All", "Websites", "Flayers", "Business Cards"],
    selected: "All",
    onSelectFilter: ''
}



export default function Portfolio() {
    const {list, setList} = useState(listOfProjects);
  
  
  
    return(
      <div>
        <Toolbar {...item}/>
        <Projects/>
      </div>
    );
  };