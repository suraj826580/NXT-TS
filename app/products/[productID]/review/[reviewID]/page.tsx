import React from "react";
interface params {
  productID: String;
  reviewID: String;
}
function ReviewID({ params }: { params: params }) {
  const { productID, reviewID } = params;
  return <div>ReviewID</div>;
}

export default ReviewID;
