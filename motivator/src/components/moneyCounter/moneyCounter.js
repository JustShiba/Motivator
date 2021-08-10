import './moneyCounter.css';

const MoneyCounter = () => {
    return (
            <div className='promotion__timer'>
                <div className='row'>
                    <div className='title col-sm-4'>Money counter:</div>
                    <div className='timer col-sm-8'>
                        <div className='timer__block'>
                            <span id='days'>12$</span>  {/*Add changer for span + design + picker*/}
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default MoneyCounter;