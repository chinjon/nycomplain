import React, { Component } from 'react';
import PickDate from './PickDate/PickDate.js'
import Select from './Select/Select';
import getHoursInDay from '../utils/get-hours-in-day';

class Search extends Component {
  constructor() {
    super()

    this.state = {
      startTime: null,
      endTime: null
    }
  }

  componentDidMount() {
    this.setState({startTime: getHoursInDay().slice(0, getHoursInDay().length - 1), endTime: getHoursInDay().slice(1)})
  }
  render() {
    return(
      this.state.startTime && this.state.endTime ? 
      <div>
        <PickDate date={this.props.date} getDate={this.props.getDate}></PickDate>
        <Select selectOptions={this.state.startTime} value={this.props.startTime} name="start-time" selectId="start-time" handleOnChange={this.props.handleOnChange} />
        <Select selectOptions={this.state.endTime} value={this.props.endTime} name="end-time" selectId="end-time" handleOnChange={this.props.handleOnChange}/>
      </div> : null
    )
  }
}

export default Search;