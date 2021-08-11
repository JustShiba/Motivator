import React, {Component} from 'react';
import './enterSalary.css'

export default class EnterSalary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currency: 'PLN',
            allCurr: ['USD', 'PLN', 'BYN'],
            numCurrency: null
        }
        this.changeCurrency = this.changeCurrency.bind(this);
        this.onChangeValue = this.onChangeValue.bind(this)
    }

    changeCurrency = (e) => {
        this.setState({
            currency: e.target.textContent 
        })
    }

    onChangeValue = (e) => {
        this.setState({
            numCurrency: e.target.value
        })
    }

    sendInf = () => {
        this.props.infSalary(this.state)
    }

    render() {
        const {currency, allCurr} = this.state;

        const buttons = allCurr.map((arrCurr) => {
            const clazz = currency === arrCurr ? `cur cur-active` : `cur`;
            return (<div 
                        key={allCurr.indexOf(arrCurr)} 
                        className={`${clazz}`}
                        onClick={this.changeCurrency}
                    >{arrCurr}</div>)
        })

        return (
            <div className='container d-flex flex-column justify-content-center col-sm-5'>
                <h2 className='d-flex justify-content-center'>Enter your salary</h2>
                <div className='d-flex justify-content-center w-75 align-self-center'>
                    <input 
                        className='border-0 bg-light w-50 salary d-flex align-self-center' 
                        type='text' 
                        placeholder='666'
                        onChange={this.onChangeValue}>
                    </input>
                    <div className='dropdown'>
                        <button className='dropbtn' onClick={this.sendInf}>Сhouse currency + <br/>SEND</button>                                 
                        <div className='dropdown-content'> 
                            {buttons}
                        </div>
                    </div>
                    <span className='perHour align-self-center'>Per<br/>hour</span>
                </div>
            </div>
    )}
}

