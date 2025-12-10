import ListComponent from "./ListComponnent";
export default function Recipe(props){
    const {name, picture,ingredients,directions} =props.recipe??{};
    return(
        <>
        <div >
      <h2 >{name}</h2>
      <img  src={picture}/>
      <ListComponent name ="ingredients"items ={ingredients} />
       <ListComponent name ="directions"items ={directions} />

     
    </div>
        </>
    )
}