import './complaint-list.css';
import React, {Component} from 'react';
import countComplaints from './../utils/count-complaints'
class ComplaintList extends Component {

  componentDidMount() {
    console.log(countComplaints(this.props.complaints))

  }

  render() {
    return (
      <div>
        {
          this.props.complaints.map((complaint) => <p key={complaint.unique_key}>{complaint.complaint_type}</p>)
        }
      </div>
    );
  }
}

export default ComplaintList;
