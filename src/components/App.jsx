import { useState } from 'react'
import '../App.css';
import { v4 as uuidv4 } from 'uuid';

const item = {
  filters: ["All", "Websites", "Flayers", "Business Cards"],
  selected: "All",
  projectsList: [{
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg",
    category: "Business Cards"
  }, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
    category: "Websites"
  }, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
    category: "Websites"
  }, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/codystretch.jpg",
    category: "Websites"
  }, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_003.jpg",
    category: "Business Cards"
  }, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290.png",
    category: "Websites"
  }, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
    category: "Websites"
  }, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
    category: "Business Cards"
  }, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_1.png",
    category: "Websites"
  }, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_2.png",
    category: "Flayers"
  }, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/the_ninetys_brand.jpg",
    category: "Websites"
  }, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/dia.jpg",
    category: "Business Cards"
  }, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197.jpg",
    category: "Websites"
  }, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
    category: "Websites"
  }, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
    category: "Business Cards"
  }, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197_1.jpg",
    category: "Websites"
  }, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_3.png",
    category: "Flayers"
  }],
  onSelectFilter: onSelectFilter()
}


// Присваивание ID проектам

function setId(projects) {
  for(const project of projects) {
    project.id = uuidv4()
  };
};

setId(item.projectsList)

// Маппинг проектов

function Projects({ projectsList }) {
  const mappingProjects = projectsList.map(project => <img src={project.img} />)

  return(
    <ul>{mappingProjects}</ul>
  )
}

// Маппинг фильтров 

function Tollbar({ filters, selected, onSelectFilter}) {
  function onSelectFilter() {
    console.log(selected)
  }
  const mappingFilters = filters.map(filter => 
    <button onClick={onSelectFilter}>{filter}</button>
  )

  return(
    <ul className='filter-list'>{mappingFilters}</ul>
  )
}

// Родительский компонент

function Portfolio() {
  const {list, setList} = useState(item.projectsList);

  // const a = () => {
  //   setList(list === onClick)
  // }

  return(
    <div>
      <Tollbar {...item}/>
      <Projects {...item}/>
    </div>
  );
};


export default Portfolio
