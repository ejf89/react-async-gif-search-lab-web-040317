import React, {Component} from 'react'

const GifList = (props) => {


  return(

    <ul className="gif-list">
    {props.gifs.map((item, index) => <li key={index}> <img src={item.images.fixed_height.url} /> </li>)}
    </ul>
  )


}

export default GifList
