import React from 'react'
// import check from '../assets/vendor/icofont/icofont.min.css'
const ExistingCust = () => {
    return (
        <>
            <div className='container'>
                <div className="row">
                    <div className="col-md-4 ">
                        <div className="circle">
                            <img src="https://www.interswitchgroup.com/assets/images/consumer/ease-of-use.svg" className="img-responsive float-start" style={{ width: "4vw" }} alt="..." />
                            <div className=" custom float-start">
                                <h3 className='card-title text-sm-start ms-4'>Existing Customers</h3>
                                <ul className="card-text list ">
                                    <li className='text-md-start'><i className='icofont-check'></i>One-time registration feature</li>
                                    <li className='text-md-start'><i className='icofont-check'></i>User friendly Interface</li>
                                    <li className='text-md-start'><i className='icofont-check'></i>Broad acceptance of different card schemes such as Verve, Mastercard, Visa and Discover</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="circle1" >
                            <img src="https://www.interswitchgroup.com/assets/images/consumer/friendly.svg" className="img-responsive float-start" style={{ width: "4vw" }} alt="..." />
                            <div className="custom float-start">
                                <h3 className='card-title text-md-start ms-4'>Ease of Use</h3>
                                <ul className="card-text list">
                                    <li className='text-md-start'><i className='icofont-check  '></i>A customisable dashboard with the ability to set up recurrent payments</li>
                                    <li className='text-md-start'><i className='icofont-check '></i>Mobile wallet to easily access funds</li>
                                    <li className='text-md-start'><i className='icofont-check '></i>Available on multiple platforms including web, mobile and POS</li>
                                    <li className='text-md-start'><i className='icofont-check '></i>Fast transaction processing</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="circle3">
                            <img src="https://www.interswitchgroup.com/assets/images/consumer/secured.svg" className="img-responsive img-fluid float-start" style={{ width: "4vw" }} />
                            <div className='custom float-start mt-4'>
                                <h3 className='card-title text-md-start'>Customer Friendly</h3>
                                <ul className="card-text list">
                                    <li><i className='icofont-check text-md-start'></i>Guarantee of transaction security</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ExistingCust