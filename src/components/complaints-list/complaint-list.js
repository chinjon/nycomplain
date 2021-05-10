import './complaint-list.css';
import React, {Component} from 'react';

class ComplaintList extends Component {
  render() {
    return (
      <div>
        {
          this.props.complaints.map((complaint) => <p>{complaint.complaint_type}</p>)
        }
      </div>
    );
  }
}

export default ComplaintList;
