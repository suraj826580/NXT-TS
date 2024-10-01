import React from "react";
interface params {
  productID: String;
  reviewID: String;
}
function ReviewID({ params }: { params: params }) {
  const { productID, reviewID } = params;
  return <div>Review ID</div>;
}

export default ReviewID;
