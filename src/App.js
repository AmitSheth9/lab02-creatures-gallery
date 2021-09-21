

import React, { Component } from 'react'
import images from './data.js';
import './App.css';


export default class App extends Component {
  state = {keyword: ''}
  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({keyword: e.target.value})
  }
  render() {
    return (
      <div>
        <header>Pick a creature keyword from the dropdwon</header>
    <select onChange={this.handleChange}>

    <option value='narwhal'>Narwhal</option>
    <option value='rhino'>Rhino</option>
    <option value='unicorn'>Unicorn</option>
    <option value='unilego'>Unilego</option>
    <option value='triceratops'>Triceratops</option>
    <option value='markhor'>Markhor</option>
    <option value='mouflon'>Mouflon</option>
    <option value='addax'>Addax</option>
    <option value='chameleon'>Chameleon</option>
    <option value='lizard'>Lizard</option>
    <option value='dragon'>Dragon</option>
    <option value='all'>All</option>
    </select>

    <ul>

  
      {images.filter(image => {
        return image.keyword === this.state.keyword}).map(image => 
        <li key={images.indexOf(image)}>
        <img src={image.url} alt=''/>
        <p>{image.title} { }

        Description: {image.description} { }
        Keyword: {image.keyword} { }
        Horns: {image.horns}
        </p>
        </li>
        
      )};
    </ul>
       </div>
     
    );
  }
}
