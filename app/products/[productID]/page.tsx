import React from "react";

function ProductID({ params }: { params: { productID: String } }) {
  return <div>ProductID {params.productID}</div>;
}

export default ProductID;
