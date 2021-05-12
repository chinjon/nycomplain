import './complaint-list.css';
import React, {Component} from 'react';
import complaintCount from '../utils/complaint-count'
import complaintListFilter from '../utils/complaint-list-filter'
class ComplaintList extends Component {

  componentDidMount() {
    console.log(complaintCount(this.props.complaints))
    console.log(complaintListFilter(this.props.complaints))
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
