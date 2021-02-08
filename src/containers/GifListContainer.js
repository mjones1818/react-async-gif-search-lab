//L42DTijAcu1uhQkQFGIWUXXidBQWC1Gb

import React, {Component} from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {
  
  state = {
    gifs: []
  }
  handleSearch = (searchTerm) => {
    let apiKey= 'L42DTijAcu1uhQkQFGIWUXXidBQWC1Gb'
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}&limit=25&offset=0&rating=g&lang=en`)
      .then(resp=> resp.json())
      .then(gifResults=> this.setState({
        gifs: gifResults.data
      }))
  }

  render() {
    console.log(this.state)
    return (
      <div className='gif-list-container'>
        <GifSearch handleSearch={this.handleSearch}/>
        <GifList gifs={this.state.gifs}/>
      </div>
    )
  }
}