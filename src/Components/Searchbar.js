import React, { Component } from 'react'
import { connect } from 'react-redux';


class Searchbar extends Component {

  handleSearch=(event) => {
    const action = {
      type: "SEARCH_EVENT", // variety of things
      payload: {
        data: event.target.value,
        // value: event.target.value,
      } 
    }
    this.props.dispatch(action);
  }
  render() {
    return (
      <div>
        <input type="text" placeholder="Search for Shows" value={this.props.searchTerm} onChange={this.handleSearch}/> 
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
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

export default connect(mapStateToProps,mapDispatchToProps)(Searchbar);
