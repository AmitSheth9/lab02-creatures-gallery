import React, { Component } from 'react'


export default class ImageList extends Component {
    render() {
        return (
            <div>
               <ul>
                   {this.props.filteredImages.map(image => 
                    <li key={this.props.images.indexOf(image)}>
                        <img src={image.url} alt=''/>
                        <p>{image.title}
                        {image.description}
                        {image.horns}</p>

                    </li> 
                   )}
               </ul>
            </div>
        )
    }
}
