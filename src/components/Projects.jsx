import listOfProjects from './data.json'
import { v4 as uuidv4 } from 'uuid'

export default function Projects(_listOfProjects) {
    const mappingProjects = listOfProjects.map(project => <img src={project.img} category={project.category} id={uuidv4()}/>)
  
    return(
      <ul>{mappingProjects}</ul>
    )
};
