
const PickHours = () => {

    return (
        <div className='container d-flex flex-column justify-content-center col-sm-5'>
            <h2 className='d-flex justify-content-center'>Pick your working hours</h2>
            <div className='d-flex justify-content-center'>
                <input 
                    className='border-0 bg-light w-25 m-auto' 
                    type='time' 
                    style={{height: 50 + 'px', fontSize: 30 + 'px'}}>
                </input>                                                                 {/*Need to change disign + add listener*/}
                <input 
                    className='border-0 bg-light w-25 m-auto' 
                    type='time' 
                    style={{height: 50 + 'px', fontSize: 30 + 'px'}}>
                </input>                                                                {/*Need to change disign + add listener*/}
            </div>
        </div>
    )
}

export default PickHours;