import './Address.css';
export default function Address(props){
const {street ,city,state,zip} =props;

return(
    <div>
        <h1>Address</h1>
        <p>{street} {city} {state} {zip}</p>
    </div>
)
}