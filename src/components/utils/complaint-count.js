const complaintCount = (complaints) => {
  const complaintCount = {};

  for(let i = 0; i < complaints.length; i++) {
    let complaintType = complaints[i]["complaint_type"];
    if(complaintCount[complaintType]) {
      complaintCount[complaintType]++; 
    } else {
      complaintCount[complaintType] = 1;
    }
  }
  return complaintCount;
}

export default complaintCount;