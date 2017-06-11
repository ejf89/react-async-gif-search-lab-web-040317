import React, { Component } from 'react'

class GifSearch extends Component{
  constructor(props){
    super(props)

    this.state = {
      searchTerm: ''
    }

    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)

  }

  handleChange(e){
    e.preventDefault()
    this.setState({
      searchTerm: e.target.value
    })
  }

  handleClick(e){
    e.preventDefault()
    this.props.handleSubmit(this.state.searchTerm)
    document.getElementById('inputForm').reset()
  }

  render(){
    return (
      <form id="inputForm">
        <input type="text" id="inputText" onChange={this.handleChange} />
        <input type="submit" onClick={this.handleClick}/>
      </form>
    )
  }

}


GifSearch.defaultProps = {
  handleSubmit: function(){}
}

export default GifSearch;
