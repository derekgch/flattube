import React, { Component } from 'react';
import TVShow from './TVShow';

class TVShowList extends Component {

  render() {
    let TVShowComponents = this.props.shows.map((show)=>{
      return <TVShow onClick={this.props.onClick} 
      showId={show.id} 
      key={show.id} 
      name={show.name} 
      src={show.image.medium} 
      selectedShow={this.props.selectedShow} 
      show={show}/>
    })


    return (
      <div>
        {TVShowComponents}
      </div>
    )
  }

}

export default TVShowList;
