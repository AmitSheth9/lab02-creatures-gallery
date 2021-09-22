

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
    const filterImages = images.filter(image => {
      if(this.state.keyword === '')
      return true;
      else 
      return (image.keyword === this.state.keyword)
    })
    return (
      <div>
        <header className = 'header' >Pick a creature keyword from the dropdwon</header>
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
    <option value=''>All</option>
    </select>

    <ul>

      
      {filterImages.map(image => 
        <li className = 'list-item' key={images.indexOf(image)}>
        <img className = 'creature-images'src={image.url} alt=''/>
        <p className = 'image-info'>{image.title} { }

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
