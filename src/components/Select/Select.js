import React, {Component} from 'react';

class Select extends Component {
  constructor(props){
    super(props);

    this.state = {
      value: ''
    }
  }
 
  render() {
    return (
      <select name={this.props.name} id={this.props.selectId} value={this.state.value} onChange={this.props.handleOnChange}>
        {(this.props.selectOptions).map((option) => {
          return <option value={option} key={`${this.props.name}-${option}`}>{option}</option>
        })}
      </select>
    )
  }
}

export default Select;