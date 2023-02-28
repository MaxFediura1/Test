import React, { Component } from 'react'
import right_arrow from '../../Images/right_arrow.png'
import left_arrow from '../../Images/left_arrow.png'
import FaresS from './FaresS.css'
export default class Fares extends Component {
  render() {
    return (
      <div className='fares'>
        <h1>Тарифы</h1>
        <div className='left_fare'>
        <h2>Тарифный 
          план “Старт”</h2>
          <p className='clients_count'>300
            клиентов</p>
            <p className='price'>28 000р.</p>
        </div>
        <div className='right_fare'>
        <h2>Тарифный план
           “Профи”</h2>
           <p className='clients_count'>800
            клиентов</p>
            <p className='price'>58 000 р.</p>
        </div>
        <div className='midle_fare'>
          <h2>Тарифный план
            “Стандарт”</h2>
            <p className='clients_count'>2500
            клиентов</p>
            <p className='price'>125 000р.</p>
        </div>
        <img src={left_arrow} id='left_arrow'/>
        <img src={right_arrow} id='right_arrow'/>
      </div>
    )
  }
}
