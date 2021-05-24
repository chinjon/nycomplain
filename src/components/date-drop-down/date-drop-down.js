import React, { Component } from 'react';

class DateDropDown extends Component {
  render() {
    return(
    <select name="date" id="date">
      {
        (this.props.dates).map((date) => {
          return <option value={date}>{date}</option>
        })
      }
    </select>
    )
  }
}

export default DateDropDown;