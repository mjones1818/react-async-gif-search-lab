import React, {Component} from 'react'

export default class GifList extends Component {

  render() {
    const gifs = this.props.gifs.map(gif => {
      return <img key={gif.url} src={gif.url} alt={'gif'}/>
    })
    console.log(gifs)
    return (
      <ul>
        <li>{gifs}</li>
      </ul>
    )
  }
}