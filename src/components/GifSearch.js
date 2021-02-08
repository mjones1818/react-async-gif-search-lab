
import React, {Component} from 'react'

export default class GifSearch extends Component {
  state = {
    search: ''
  }

  handleChange = (searchValue) => {
    this.setState({search: searchValue.target.value})
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.handleSearch(this.state.search)
  } 

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <div >
          <label>Enter a Search Term:</label> <br></br>
            <input id='search' name='search' type='text' value={this.state.search} onChange={this.handleChange}></input>
          
        </div>
        <div>
          <button type='submit'>Find Gifs</button>
        </div>

      </form>
    )
  }
}