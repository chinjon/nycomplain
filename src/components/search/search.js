import React, { Component } from 'react';
import PickDate from '../pick-date/pick-date.js'

class Search extends Component {
  render() {
    return(
      <PickDate getDate={this.props.getDate}></PickDate>
    )
  }
}

export default Search;