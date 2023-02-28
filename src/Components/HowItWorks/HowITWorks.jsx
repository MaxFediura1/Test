import React, { Component } from 'react'
import users from '../../Images/users.png'
import coin from '../../Images/coin.png'
import tv from '../../Images/tv.png'
import phone from '../../Images/phone.png'
import straight_arrow from '../../Images/straight_arrow.png'
import curved_arrow from '../../Images/curved_arrow.png'
import HowItWorksS from './HowItWorksS.css'


export default class HowItWorks extends Component {
  render() {
    return (
      <div className='how_it_works'>
        <h1>Как все работает?</h1>
        <img src={phone} id='phone' />
        <img src={straight_arrow} id='straight_arrow1' />
        <img src={tv} id='tv' />
        <img src={straight_arrow} id='straight_arrow2' />
        <img src={users} id='users' />
        <img src={curved_arrow} id='curved_arrow'/>
        <img src={coin} id='coin' />
      </div>
    )
  }
}
