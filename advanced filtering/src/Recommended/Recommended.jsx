import React from 'react'
import './Recommended.css'

export default function Recommended() {
  return (
    <div>
      <h2 className='recommended-title'>Recommended</h2>
      <div className="recommended-flex">
        <button className='btns'>All products</button>
        <button className='btns'>Nike</button>
        <button className='btns'>Adidas</button>
        <button className='btns'>Puma</button>
        <button className='btns'>Vans</button>
      </div>
    </div>
  )
}
