import React, { Component } from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

// import GifList from './GifList'


class GifListContainer extends Component {
  constructor(){
    super()

      this.state = {
        gifs: []
    }

    this.fetchGifs = this.fetchGifs.bind(this)
  }

  componentDidMount(){
    this.fetchGifs()
  }



  fetchGifs (searchTerm) {
    fetch(`http://api.giphy.com/v1/gifs/search?q=` + searchTerm + `&api_key=dc6zaTOxFJmzC`)
    .then(response => response.json())
    .then(gifs => this.setState({ gifs: gifs.data.slice(0,3) }))
    console.log(this.state.gifs)

  }

  render(){

    return(
      <div>
        <h1> Search a MFin Gify my guy: </h1>
        <GifSearch handleSubmit={this.fetchGifs.bind(this)} />
        <GifList gifs={this.state.gifs} />
      </div>
    )
  }
}
 export default GifListContainer;
