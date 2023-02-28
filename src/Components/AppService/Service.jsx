import React, { Component } from 'react'
import ServiceS from './ServiseS.css'
export default class Service extends Component {
  render() {
    return (
      <div className='service'>
        <h1>Услуги</h1>
        <p className='left_p'><span>Лидогенерация</span> <br/>
        Поможет вашему бизнесу <br/>
            привлекать клиентов и  <br/>    
            успешно удержать старых.</p>
        <p className='right_p'> <span>Голосовой бот/Чат</span> <br />
        Бот который всегда на связи с <br/>
             вашими клиентами, помогает <br/>
              подобрать товар, собрать <br/>
               первичные данные ответит на <br/>
                вопрос и многое другое.</p>
        <div className='line1'></div>
        <div className='line2'></div>
        <div className='line3'></div>
      </div>
    )
  }
}
