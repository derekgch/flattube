import React, { Component } from 'react';
import ShowDetails from './ShowDetails';

export default class TVShow extends Component {
  render() {
    let showDetail;
      if(this.props.selectedShow){
         showDetail = this.props.selectedShow.id === this.props.showId ? < ShowDetails show={this.props.show} /> : null
      }
    return (
      <div onClick={() => this.props.onClick(this.props.showId)}>
        <h3>{this.props.name}</h3>
        <img src={this.props.src} />
        {showDetail}
      </div>
    )
  }
}
