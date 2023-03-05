import React from 'react'
import quick from '../assest/image/quick.webp'
const Shop = () => {
    return (
        <>
            <div className='container'>
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-6">
                        {/* First Div */}
                        <div className='your'>
                            <h3 className='text-center'>
                                Your one-stop-shop for easy payments
                            </h3>
                            <p className='text-md-start'>Quickteller is an easy-to-use, multi-channel payments platform designed to make payments an easy and enjoyable experience.</p>
                            <p className='text-md-start'>The platform connects users to over 8,000 billers, enabling individuals to pay for just about anything from the comfort of their mobile device.</p>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-5 text-center">
                                <div className='bill'>
                                    <img src='https://www.interswitchgroup.com/assets/images/consumer/Bills-1.svg' className='img-responsive img-fluid w-49' />
                                    <h3 className='text-md-center'>Bill payments</h3>
                                    <p className='text-md-start float-start'>Entertainment and data subscriptions, electricity bills, government dues and levies, airtime and cable Tv- whatever it is, discover the easiest and quickest way to pay bills</p>
                                </div>
                            </div>
                            <div className='col-md-6 text-center'>
                                <div className='flight'>
                                    <img src='https://www.interswitchgroup.com/assets/images/consumer/Flight-1.svg' className='img-responsive img-fluid text-center w-49' />
                                    <h3 className='text-md-start'>
                                        Flight booking
                                    </h3>
                                    <p className='text-md-start'>From cost-effective flight options to smooth payment experience, our flight booking service is the easiest way to travel anywhere</p>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-6 text-center">
                                <div className='ticket'>
                                    <img src="https://www.interswitchgroup.com/assets/images/consumer/Ticket-1.svg " alt="bhbbv" className='img-responsive img-fluid w-49' />
                                    <h3 className='text-md-start'>Event tickets</h3>
                                    <p className='text-md-start'>Get verified tickets to the most exclusive and anticipated event without any stress</p>
                                </div>
                            </div>
                            <div className="col-md-6 mb-5 text-center">
                                <div className='global'>
                                    <img src='https://www.interswitchgroup.com/assets/images/consumer/online-shopping-1.svg' className='img-responsive img-fluid w-49' />
                                    <h3 className='text-md-start'>Global online shopping</h3>
                                    <p className='text-md-start'>Shop directly from over 100 leading US/UK stores, pay in Naira and enjoy doorstep delivery to your Nigerian address.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className=''>
                            <img src={quick} className='img-responsive img-fluid finegirl' style={{ height: '80vh', width: "80vw" }} />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Shop
