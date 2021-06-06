import React, {Component} from 'react';

class Select extends Component {
 
  render() {
    return (
      <select name={this.props.name} id={this.props.selectId}>
        {(this.props.selectOptions).map((option) => {
          return <option value={option} key={`${this.props.name}-${option}`}>{option}</option>
        })}
      </select>
    )
  }
}

export default Select;