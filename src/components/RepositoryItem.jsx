export function RepositoryItem(props) { 
  console.log('props', props)
 return ( 
    <li>
      <strong>{props.repository.name ?? 'Default'}</strong>
      <p>{props.repository.description}</p>

      <a href={props.repository.link}> 
      Acessar Repositórios
      </a>
   </li>
 );   
}