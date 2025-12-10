


export default function WeatherDetails(props) {
  const { name, icon, temp, description } = props.weather;

  return (
    <div className="row">
      <div>The weather in <span id="location">{name}</span></div>
      <img className="m-auto" id="icon" src={icon} />
      <div><span id="temperature">{temp}</span> and <span id="description">{description}</span></div>
    </div>
  )
}