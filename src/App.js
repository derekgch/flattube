import React, { Component } from 'react';
import Adapter from './Adapter';
import TVShowList from './Components/TVShowList';
import './App.css';
import Searchbar from './Components/Searchbar';
import { connect } from 'react-redux';


class App extends Component {

  // state = {
  //   shows: [],
  //   selectedShow: null,
  //   searchTerm: "",
  // }

  // handleSearch= (event) => {
  //   // this.setState({
  //   //   searchTerm: event.target.value
  //   // })
    
  // }

  componentDidMount() {
    Adapter.getShows().then( (data) => this.setSearch(data))
  }

  changeSelectedShow = (showId) => {
    // console.log('youre inside changeSelectedShow')
    // console.log('showId of selected show', showId)
    let selectedShow = this.props.shows.find((show) => {
      return show.id === showId
    })
    this.setState({
      selectedShow: selectedShow,
    }, ()=> console.log(this.props.selectedShow))
  }

  render = () => {
    let filtered = this.props.shows
    if(this.props.searchTerm){
      filtered = this.props.shows.filter(show => show.name.toLowerCase().includes(this.props.searchTerm.toLowerCase()))
    }
    return (
      <div>
        <Searchbar/>
        <TVShowList onClick={this.setSelectShow} 
        shows={filtered} 
        selectedShow={this.props.selectedShow}
        />

      </div>
    );
  }


   setSearch(data) {
    const action = {
      type: "LOAD_EVENT", // variety of things
      payload: {
        data: data,
        // value: event.target.value,
      } // bunch of stuff being delivered
    }
    this.props.dispatch(action);
  }

  setSelectShow=(id)=>{
    const action ={
      type: "CLICK_EVENT",
      payload: {
        data: id
      }
    }
    this.props.dispatch(action);
  }

}



const mapStateToProps = (state) => {
  return {
    shows: state.shows,
    selectedShow: state.selectedShow,
    searchTerm: state.searchTerm
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // toggleDancing: toggleDancing(dispatch),
    // setCounter: setCounter(dispatch),
    dispatch
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
