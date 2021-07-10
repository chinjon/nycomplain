import React, { Component } from 'react';
import DatePicker from 'react-date-picker';
import getDateFromDateAgo from '../../utils/getDateFromDateAgo'

class PickDate extends Component {
  constructor(props) {
    super(props)
    this.state = {value: ''}
  }

  componentDidMount() {
    this.setState({value: this.props.date})
  }

  onChange = (event) => {
    this.props.getDate(event)
    this.setState({value: this.props.date})
    this.setState({value: event})
  }

  render() {
    return(
      <div>
      <DatePicker
        clearIcon={null}
        onChange={this.onChange}
        value={this.state.value}
        maxDate={getDateFromDateAgo(2)}
      />
    </div>
    )
  }
}

export default PickDate;
