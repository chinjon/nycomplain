import React, { Component } from 'react';
import PickDate from '../pick-date/pick-date.js'
import Select from '../Select/Select';
import getHoursInDay from '../utils/get-hours-in-day';

class Search extends Component {
  constructor() {
    super()

    this.state = {
      startTime: null
    }
  }

  componentDidMount() {
    console.log(getHoursInDay())
    this.setState({startTime: getHoursInDay()})
  }
  render() {
    return(
      this.state.startTime ? 
      <div>
        <PickDate date={this.props.date} getDate={this.props.getDate}></PickDate>
        <Select selectOptions={this.state.startTime} name="start-date" selectId="start-date" />
      </div> : null
    )
  }
}

export default Search;