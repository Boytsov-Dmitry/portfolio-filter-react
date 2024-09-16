export default function ProjectList({ list }) {
    return(
      <ul className={'projectList'}>
        {list.map((item) => (
          <li key={item.id}>
            <img className={'projectItem'} src={item.img} />
          </li>
        ))}
      </ul>
    )
};
