
const TimeRange = () => {
    return (
        <div className='container' style={{height: 50 + 'px'}}>
            <div className='row h-100'>
                <span 
                    className='col-sm-1 align-self-center d-flex justify-content-center' 
                    style={{fontSize: 30 + 'px'}}>
                00:00</span>                                                                        {/*change time*/}
                <div className='col-sm-10 progress align-self-center'>
                    <div 
                        className='progress-bar progress-bar-striped progress-bar-animated' 
                        role='progressbar' style={{width: 40 + '%'}}                                //add counter for progress bar
                        aria-valuenow='40' 
                        aria-valuemin='0' 
                        aria-valuemax='100'>
                    </div>
                </div>
                <span
                    className='col-sm-1 align-self-center d-flex justify-content-center' 
                    style={{fontSize: 30 + 'px'}}>
                00:00</span>                                                                        {/*change time*/}
            </div>
        </div>
    )
}

export default TimeRange;