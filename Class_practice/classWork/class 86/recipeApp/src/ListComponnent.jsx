import './listComponent.css'
export default function ListComponent(props){
    const {name,items}=props

    return(
        <>
         <h5 >{name}</h5>
      <ul className="list">
        {items?.map((i ,index)=><li key={index}>{i}</li>)}
      </ul>
       
    </>
    
    )
}