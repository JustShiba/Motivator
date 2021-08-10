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
            timer: {
                start: null,
                end: null,
                time: null
            },
            salary: {
                count: null,
                currency: null
            }
        }
        this.startCount = this.startCount.bind(this);
    }

    startCount = (terms) => {
        console.log(terms);
    }

    checkBtn = (time, count, currency, e) => {
        if (time !== null && count !== null && currency !== null) {
            e.target.disabled = !e.target.disabled;
        }
    }

    render () {
        const {time} = this.state.timer;
        const {count, currency} = this.state.salary;
        return (
            <>
                <Header/>
                <div className='row w-100'>
                    <PickHours/>
                    <button 
                        disabled
                        onClick={(e) => this.checkBtn(time, count, currency, e)}
                        type='button' 
                        className='btn btn-outline-success col-sm-2 align-self-end' 
                        style={{fontSize: 30 + 'px', height: 70 + 'px'}}>
                    Start</button>
                    <EnterSalary/>
                </div>
                <MoneyCounter/>
                <TimeRange/>
            </>
        )
    }
}

