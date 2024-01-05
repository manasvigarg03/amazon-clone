import React from 'react';
import "./Product.css";

function Product() {
  return (
    <div className='Product'>
        <div className='Product_info'>
            <p>The Lean Startup</p>
            <p className='Product_Price'>
                <small>$</small>
                <strong>19.99</strong>
            </p>

            <div className='Product_rating'>
                <p></p>
            </div>
        </div>
     

    </div>
  )
}

export default Product