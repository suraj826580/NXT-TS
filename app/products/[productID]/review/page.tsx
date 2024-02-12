import React from "react";

function ProductReview({ params }: { params: { productID: String } }) {
  console.log(params);
  return <div>Product Review</div>;
}

export default ProductReview;
