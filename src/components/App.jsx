import { useState } from 'react'
import Projects from './Projects'
import Toolbar from './Toolbar'
import '../App.css';
import listOfProjects from './data.json';


const item = {
  filters: ["All", "Websites", "Flayers", "Business Cards"],
  selected: "All",
  onSelectFilter: ''
}


function Portfolio() {
  const {list, setList} = useState(listOfProjects);



  return(
    <div>
      <Toolbar {...item}/>
      <Projects/>
    </div>
  );
};


function App() {
  return <Portfolio />;
}

export default App;
