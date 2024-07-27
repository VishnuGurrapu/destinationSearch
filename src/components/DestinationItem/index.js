import './index.css'

const DestinationItem = props => {
  const {imgDetails} = props
  const {id, name, imgUrl} = imgDetails
  return (
    <li key={id} className="destination-item">
      <div className="destination-container">
        <img src={imgUrl} className="img" alt={name} />
        <p className="name">{name}</p>
      </div>
    </li>
  )
}

export default DestinationItem
