import React, { Component } from 'react'

export default class Searchbar extends Component {
  render() {
    return (
      <div>
        <input type="text" placeholder="Search for Shows" value={this.props.value} onChange={this.props.handleSearch}/> 
      </div>
    )
  }
}
