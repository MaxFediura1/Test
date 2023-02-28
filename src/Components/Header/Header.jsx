import React, { Component } from 'react'
import img from '../../Images/header.svg'
import HeaderS from './HeaderS.css'

export default class Header extends Component {
  render() {
    return (
      <div className='header'>
        <img src={img} alt="handshake"/>
        <ul>
            <li>O нас</li>
            <li>Услуги</li>
            <li>Тарифы</li>
            <li>Как всё работает</li>
            <li>Отзывы</li>
            <li>Детальность</li>
            <li>Наши партнёры</li>
        </ul>
        <p>Приведите партнёра и вы обое получите скидку в 10% на<br/>
        рекламу своего бизнеса</p>
      </div>
    )
  }
}
