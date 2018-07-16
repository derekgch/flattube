import React, { Component } from 'react'
import Adapter from '../Adapter';


export default class ShowDetails extends Component {
    state = {
        seasons: [],
        episodes: [],
        selectedSeason: "1"
    }

    componentDidMount() {

        Adapter.getShowEpisodes(this.props.show.id).then((data) =>{
            this.setState({
                episodes: data
            },() => {this.getSeasons()})

        })

       
    }

    getSeasons = () => {
        let seasonsArray =[]
        this.state.episodes.forEach((episode) => {
            if (!seasonsArray.includes(episode.season)) {
                 seasonsArray.push(episode.season)
            }
        })
        this.setState({
            seasons: seasonsArray,
        })
    }

    displayEpisodes = () => {
        return this.state.episodes.filter((episode) => {
            return episode.season == this.state.selectedSeason
        }).map((episode)=>{
            return <li key={episode.id}> {episode.name} </li>
        })
    }

    setSelectedSeason = (event) => {
        this.setState({
            selectedSeason: event.target.value
        })
    }

  render() {
      let {name, summary, status, premiered, rating} = this.props.show;
      let seasonOptions = this.state.seasons.map((season) => {
          return <option key={season} value={season}>Season {season}</option>
      })
    return (
      <div>
        {name} <br/>
        {summary} <br/>
        {status} <br/>
        {premiered} <br/>
        {rating.average} <br/>
        <select onChange={this.setSelectedSeason} style={{ display: "block" }}>
            {seasonOptions}
        </select>
        {this.displayEpisodes()}
      </div>
    )
  }
}
