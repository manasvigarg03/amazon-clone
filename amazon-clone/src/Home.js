import React from 'react';
import "./Home.css"
import Product from './Product';


function Home() {
  return (
    <div className='Home'>
        <div className='Home__container'>
            <img className='Home__image'
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img24/Beauty/GW/atf/jan/PC-2._CB585328329_.jpg" />

            <div className='Home_row'>
                <Product/>

            </div>

            <div className='Home_row'>
                
                
            </div>

            <div className='Home_row'>
                
            </div>

        </div>


    </div>
  )
}

export default Home
