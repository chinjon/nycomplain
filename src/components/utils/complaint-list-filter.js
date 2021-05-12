const complaintListFilter = (complaints) => {
  const complaintFiltered = [];
  complaints.forEach((complaint) => {
    if (!complaintFiltered.includes(complaint.complaint_type.toLowerCase())) {
      complaintFiltered.push(complaint.complaint_type.toLowerCase());
    }
  });

  return complaintFiltered;
}

export default complaintListFilter;