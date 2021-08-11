import React, {Component} from 'react';
import Header from '../header';
import PickHours from '../pickHours';
import MoneyCounter from '../moneyCounter';
import TimeRange from '../timeRange';
import EnterSalary from '../enterSalary';
import './App.css';


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            start: '17:20',
            end: null,
            time: null,
            count: null,
            currency: null
        }
        this.startCount = this.startCount.bind(this);
    }

    startCount = (terms) => {
        console.log(terms);
    }

    checkBtn = (start, end, count, currency) => {
        if (start === null || end === null || count === null || currency === null) {
            const dateNowHours = new Date().getHours();
            const dateNowMinutes = new Date().getMinutes();
            const arrStart = this.state.start.split(':');
            const startCounter = (((+arrStart[0] * 60 * 60) + (+arrStart[1] * 60)) - ((dateNowHours * 60 * 60) + (dateNowMinutes * 60)))
            console.log(this.state, dateNowHours, dateNowMinutes, startCounter);
        } else {
            console.log('Пожалуйста, введите все данные и отправьте при помощи двух боковых кнопок)');          //  CHANGE  
        }
    }

    infSalary = ({currency, numCurrency}) => {
        this.setState({
            count: numCurrency,
            currency: currency
        })
    }

    infTimer = ({start, end}) => {
        this.setState({
            start: start,
            end: end
        })
    }

    render () {
        const {start, end, count, currency} = this.state;
        
        return (
            <>
                <Header/>
                <div className='row w-100'>
                    <PickHours infTime={this.infTimer}/>
                    <button 
                        onClick={(e) => {this.checkBtn(start, end, count, currency)}}
                        type='button' 
                        className='btn btn-outline-success col-sm-2 align-self-end' 
                        style={{fontSize: 30 + 'px', height: 70 + 'px'}}>
                    Start</button>
                    <EnterSalary infSalary={this.infSalary}/>
                </div>
                <MoneyCounter/>
                <TimeRange/>
            </>
        )
    }
}

