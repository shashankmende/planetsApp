// Write your code here
import './index.css'

const PlanetItem = props => {
  const {planet} = props
  const {name, imageUrl, description} = planet
  return (
    <div>
      <img src={imageUrl} alt={`planet ${name}`} className="image" />
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  )
}

export default PlanetItem
