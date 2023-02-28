import React, { Component } from 'react'
import CalculatorS from './CalculatorS.css'

export default class Calculator extends Component {
  render() {

    // const calculate = () =>{
    //   let midlleCheck = document.getElementsByClassName('input1').value;
    //   document.querySelector('.result_label2').innerHTML = midlleCheck;
    // }

    return (
      <div className='calculator'>
        {/* <button className='btn' onClick={calculate}></button> */}
        <form className='calculator_form'>
          <label className='input_label1'>Средний чек</label>
          <label className='input_label2'>Тариф</label>
          <label className='input_label3'>Действующая конверсия сайта</label>
          <input type="number" className="input1"  placeholder='1000'/>
          <select id='select_fares'>
            <option>Старт</option>
            <option>Стандарт</option>
            <option>Профи</option>
          </select>
          <input type="text" id="input2"  placeholder='1.3'/>
          <button>готово</button>
          <div className='price_form'>
          <label id='result_label1'>Результат:</label>
          <label className='result_label2'></label>
          </div>
        </form>
      </div>
    )
  }
}
