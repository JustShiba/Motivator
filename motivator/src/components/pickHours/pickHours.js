import React, {Component} from 'react'
import './pickHours.css'

export default class PickHours extends Component {
    constructor(props) {
        super(props);
        this.state = {
            start: null,
            end: null
        }
    }

    changeTimeStart = (e) => {
        this.setState({
            start: e.target.value
        })
    }

    changeTimeEnd = (e) => {
        this.setState({
            end: e.target.value
        })
    }

    sendInf = () => {
        this.props.infTime(this.state);
    }

    render() {
        
        return (
            <div className='container d-flex flex-column justify-content-center col-sm-5'>
                <h2 className='d-flex justify-content-center'>Pick your working hours</h2>
                <div className='d-flex justify-content-center'>
                    <div className='container d-flex flex-column'>
                        <h4 className='align-self-center'>start</h4>
                        <input 
                            className='border-0 bg-light w-75 m-auto' 
                            type='time' 
                            style={{height: 50 + 'px', fontSize: 30 + 'px'}}
                            onChange={this.changeTimeStart}>
                        </input>
                    </div>                                                                
                    <button type='button' className='btn-g' onClick={this.sendInf}>Send</button>
                    <div className='container d-flex flex-column'>
                        <h4 className='align-self-center'>finish</h4>
                        <input 
                            className='border-0 bg-light w-75 m-auto' 
                            type='time' 
                            style={{height: 50 + 'px', fontSize: 30 + 'px'}}
                            onChange={this.changeTimeEnd}>
                        </input>
                    </div>                                                               
                </div>
            </div>
        )
    }
}
