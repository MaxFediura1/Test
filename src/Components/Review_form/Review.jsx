import React, { Component } from 'react'
import ReviewS from './ReviewS.css'
export default class Review extends Component {
  render() {
    return (
      <div className='review'>

        <form className='review_form'>
        <p>Как  мы можем вам помочь? <br/><br/>
          <b>Напишите нам</b> <br/><br/>
          Оставтье сообщение и мы с Вами свяжемся
        </p>
          <input type='text' className='name' placeholder='Имя'/>
          <input type='tel' className='tel1' placeholder='Телефон'/>
          <input type='email' className='email1' placeholder='Почта'/>
          <textarea className='message1' placeholder='Сообщение'/>
          <button>Отправить</button>
        </form>
      </div>
    )
  }
}
