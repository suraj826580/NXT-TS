import Link from "next/link";
import React from "react";

function ProductList() {
  return (
    <>
      <h1>Product List</h1>
      <Link href={`/products/1`}>Mango</Link>
      <br />
      <Link href={`/products/2`}>Guava</Link>
      <br />
      <Link href={`/products/3`}>Apple</Link>
    </>
  );
}

export default ProductList;
