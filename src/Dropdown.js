import React, { Component } from 'react'

export default class Dropdown extends Component {
    render() {
        return (
            <div>
                <select className='dropdown' onChange={this.props.handleChange}>
                <option value=''>All</option>
                {this.props.options.map(option => 
                    <option value={option}>{option}</option>
                )}
                
                </select>
                
            </div>
        )
    }
}
