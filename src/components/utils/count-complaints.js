const countComplaints = (complaints) => {
  const complaintsCount = {};

  for(let i = 0; i < complaints.length; i++) {
    let complaintType = complaints[i]["complaint_type"];
    if(complaintsCount[complaintType]) {
      complaintsCount[complaintType]++; 
    } else {
      complaintsCount[complaintType] = 1;
    }
  }
  return complaintsCount;
}

export default countComplaints;