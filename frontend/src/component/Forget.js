import React from 'react'
import NavBar from './NavBar'
import { useFormik } from 'formik'
import * as yup from "yup"
import { useState } from 'react'
const Forget = () => {
    const [isloading, setisloading] = useState(false)
    const formik = useFormik({
        initialValues: {
            Email: "",
        },
        onSubmit: (values) => {
            console.log(values);
            setisloading(true)
        },
        validationSchema: yup.object({
            Email: yup.string()
                .required("This is field is required").email("must be a valid Email"),
        })
    })
    return (
        <>
            <NavBar />
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <h4>
                            Forgot Your Password?
                        </h4>
                        <p>To reset your password please enter your email inside the input</p>
                        <h4>if you don't know your email address, or it is invalid. Please  <a href='#'>Contact Us for Further assistance</a></h4>
                        <form action="" onSubmit={formik.handleSubmit}>
                            <input type="text" className="inp" name='Email' placeholder="email" onChange={formik.handleChange} />
                            <div className='text-danger who my-3'>{formik.errors.Email}</div>
                            <button type='submit' className='btn py-2 px-5 me-2 mt-4' disabled={isloading} style={{ background: " #00425f", color: "white", fontSize: "19px" }}>{isloading ? " Processing... " : "Reset"}</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Forget