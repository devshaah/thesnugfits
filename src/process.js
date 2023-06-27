import React from 'react'
import './style.css'
import fabric from './assets/PROCESS/fabrics.png'
import cutting from './assets/PROCESS/cutting.jpg'
import embroidery from './assets/PROCESS/embroidery.jpg'
import printing from './assets/PROCESS/printing.jpg'
import sewing from './assets/PROCESS/sewing.jpg'
import ironing from './assets/PROCESS/ironing.jpg'
import checking from './assets/PROCESS/checking.jpg'
import packing from './assets/PROCESS/packing.jpg'
import delivery from './assets/PROCESS/delivery.jpg'


const process = () => {
  return (
          <div className='processhead'>
            <h1 >Path your Product goes through to reach you ...</h1>
    <div className='process'>
        <div className='processbox'>
            <img src={fabric} className='processimg' />
              <h3>Fabric Selection</h3>
        </div>
        <div className='processbox'>
        <img src={cutting} className='processimg' />
              <h3>Cutting</h3>
        </div>
        <div className='processbox'>
        <img src={embroidery} className='processimg' />
              <h3>Embroidery</h3>
        </div>
        <div className='processbox'>
        <img src={printing} className='processimg' />
              <h3>Printing</h3>
        </div>
        <div className='processbox'>
        <img src={sewing} className='processimg' />
              <h3>Sewing / Stiching</h3>
        </div>
        <div className='processbox'>
        <img src={ironing} className='processimg' />
              <h3>Ironing</h3>
        </div>
        <div className='processbox'>
        <img src={checking} className='processimg' />
              <h3>Checking</h3>
        </div>
        <div className='processbox'>
        <img src={packing} className='processimg' />
              <h3>Packing</h3>
        </div>
        <div className='processbox'>
        <img src={delivery} className='processimg' />
              <h3>Delivery</h3>
        </div>

    </div>
    </div>
  )
}

export default process
