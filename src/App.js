

import React, { Component } from 'react'
import images from './data.js';
import './App.css';
import Dropdown from './Dropdown.js';
import ImageList from './ImageList.js';

export default class App extends Component {
  state = {keyword: '',
          horns: ''}
  
  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({keyword: e.target.value})

 
  }


  render() {
   
      const filterImages = images.filter(image => {
      if(this.state.keyword === '' && this.state.horns ==='')
      return true;
      else 
      return (image.keyword === this.state.keyword && image.horns === this.state.horns)
        })




    
    const keywordAll = images.map(image => {
      return image.keyword
    });
    let uniqueKeys = [];
    for(let item of keywordAll) {
      if(!uniqueKeys.includes(item)) {
        uniqueKeys.push(item);
      }
    }

    const hornsAll = images.map(image => {
      return image.horns
    });
    let uniqueHorns = [];
    for (let item of hornsAll) {
      if(!uniqueHorns.includes(item)){
        uniqueHorns.push(item);
      }
    }
    return (
      <div>
        <header className = 'header' >Pick a creature keyword from the dropdwon</header>
        <Dropdown handleChange = {this.handleChange}
        options = {uniqueKeys}/>
        <Dropdown handleChange = {this.handleChange}
        options = {uniqueHorns}/>
        <ImageList images = {images}
        filteredImages = {filterImages}/>


    <ul>

      {/*
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
      */}
    </ul>
       </div>
     
    );
  }
}
