import React, { Component } from 'react'
import PartnersS from './PartnersS.css'

import audi from '../../Images/audi.png'
import skillbox from '../../Images/skillbox.png'
import skyeng from '../../Images/skyeng.png'
import mango from '../../Images/mango.png'
import mtc from '../../Images/mtc.png'
export default class Partners extends Component {
  render() {
    return (
      <div className='partners'>
                <h1>Легальность</h1>
        <p>AEIX group - компания, которая  завоевала доверие <br/>
             уже тысячи клиентов, среди которых:</p>
             <img src={audi} className='audi' />
             <img src={skillbox} className='skillbox'/>
             <img src={skyeng} className='skyeng' />
             <img src={mango} className='mango' />
             <img src={mtc} className='mtc' />
      </div>
    )
  }
}
