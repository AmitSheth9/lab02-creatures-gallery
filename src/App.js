

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

  handleHornsChange = (e) => {
    console.log(e.target.value)
    this.setState({horns: e.target.value})
  }


  render() {
   const filterImages = images.filter(image => {
     
      if (this.state.keyword === '' && this.state.horns === '')
      return true;
      else if(this.state.horns === '')
      return (image.keyword=== this.state.keyword)
      if (this.state.keyword === '' && this.state.horns !== '')
      return (image.horns === Number(this.state.horns))
      else 
      return (image.keyword === this.state.keyword && image.horns === Number(this.state.horns))
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
        <Dropdown handleChange = {this.handleHornsChange}
        options = {uniqueHorns}/>
        <ImageList images = {images}
        filteredImages = {filterImages}/>
        {console.log(this.state)}

       </div>
     
    );
  }
}
