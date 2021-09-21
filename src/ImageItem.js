import React, { Component } from 'react'

export default class ImageItem extends Component {
    render() {
        return (
            <div>
                <img src='{this.props.url}' alt=''/>
                <p>{this.props.title}
                {this.props.description}
                {this.props.keyword}
                {this.props.horns} </p>
            </div>
        )
    }
}
