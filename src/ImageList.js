import React, { Component } from 'react'


export default class ImageList extends Component {
    render() {
        return (
            <div>
               <ul>
                   {this.props.filteredImages.map(image => 
                    <li className='list-item' key={this.props.images.indexOf(image)}>
                        <img className='image' src={image.url} alt=''/>
                        <p className = 'image-info'>{image.title}<br></br> { }
                        {image.description}<br></br> { }
                        Horns: {image.horns}</p>

                    </li> 
                   )}
               </ul>
            </div>
        )
    }
}
