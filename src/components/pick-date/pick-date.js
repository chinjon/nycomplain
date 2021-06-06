import React, { Component } from 'react';
import DatePicker from 'react-date-picker';

class PickDate extends Component {
  constructor(props) {
    super(props)
    this.state = {value: ''}
  }

  componentDidMount() {
    this.setState({value: new Date(this.props.date)})
  }

  onChange = (event) => {
    this.props.getDate(event)
    this.setState({value: new Date(this.props.date)})
    this.setState({value: event})
  }

  render() {
    return(
      <div>
      <DatePicker
        clearIcon={null}
        onChange={this.onChange}
        value={this.state.value}
      />
    </div>
    )
  }
}

export default PickDate;
