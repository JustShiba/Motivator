import React, {Component} from 'react';
import './enterSalary.css'

export default class EnterSalary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currency: 'PLN',
            allCurr: ['USD', 'PLN', 'BYN']
        }
    }

    changeCurrency = (e) => {
        this.setState({
            currency: e.target.textContent 
        })
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
                    <input className='border-0 bg-light w-50 salary' type='text' placeholder='666'></input>  {/*add listener for*/}
                    <div className='dropdown'>
                        <button className='dropbtn'>Сhouse currency</button>                                 {/*change button*/}
                        <div className='dropdown-content'>
                            {buttons}
                        </div>
                    </div>
                    <span className='perHour'>Per<br/>hour</span>
                </div>
            </div>
    )}
}

