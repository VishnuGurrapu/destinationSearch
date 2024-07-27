// Write your code here
import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }
  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    const searchResults = destinationsList.filter(destination =>
      destination.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="app-container">
        <h1 className="heading">Destination Search</h1>
        <div className="search-input-container">
          <input
            type="search"
            placeholder="Search"
            value={searchInput}
            onChange={this.onChangeSearchInput}
            className="search-input"
          />
          <img
            className="icon"
            alt="Search icon"
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
          />
        </div>
        <ul className="destinations-list">
          {searchResults.map(destination => (
            <DestinationItem key={destination.id} imgDetails={destination} />
          ))}
        </ul>
      </div>
    )
  }
}
export default DestinationSearch
