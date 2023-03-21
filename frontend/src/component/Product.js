import React from 'react'

const Product = () => {
    return (
        <>
            <div className='container' style={{ marginBottom: "100px", marginTop: "34px" }}>
                <div className='section5'>
                    <div className="row py-3">
                        <div className="col-md-6 inter float-start">
                            <h3 className='text-md-start  ms-4' >Interested in the product?</h3>
                            <p className='text-md-start  ms-4'>Let’s get you started</p>
                        </div>
                        <div className="col-md-6 mt-4">
                            <div className=''>
                                <a href='#' className='go mx-3'>Go to Quickteller</a>
                                <a href='#' className='Book'>Book a Consultation</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product