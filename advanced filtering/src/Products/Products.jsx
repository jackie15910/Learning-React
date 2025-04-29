import React from 'react'
import './Products.css'
import Card from '../components/Card'
// import { data } from "../db/data";

export default function Products() {
  return (
    <>
    <section className="card-container">
      <Card/>
    </section>
    </>
  )
}

// const Products = ({ result }) => {
//   return (
//     <>
//       <section className="card-container">{result}</section>
//     </>
//   );
// };

// export default Products;