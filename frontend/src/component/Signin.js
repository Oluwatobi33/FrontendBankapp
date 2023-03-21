import React from 'react'
import { useState } from "react"
import * as yup from "yup"
import { Link } from 'react-router-dom'
import Background from './Background'
import img1 from "../assest/image/lo.png"
// import Signup  from './Signup'
import { useNavigate } from "react-router-dom";
import Dashboard from './Dashboard'
import { useFormik, validateYupSchema } from 'formik'
import NavBar from './NavBar'
import axios from "axios";
import { baseurl } from "./Endpoint";
// let emmanuel = JSON.parse(localStorage.getItem("Interswitch"))
// console.log(emmanuel);
const Signin = () => {
    const Navigate = useNavigate()
    // const [email, setemail] = useState("")
    // const [password, setpassword] = useState("")
    const [userLogin, setuserLogin] = useState([])
    const [success, setsuccess] = useState("")
    const [Error, setError] = useState("")
    const [loader, setloader] = useState(false)
    const [isloading, setisLoading] = useState(false)
    const [value, setvalue] = useState("")
    // const [Error, setError] = useState("")
    const formik = useFormik({
        initialValues: {
            Email: "",
            Password: ""
        },
        onSubmit: (values) => {
            setisLoading(true)
            axios.post(`${baseurl}signin`, values).then((data) => {
                if (data) {
                    console.log(data);
                    let Err = data.data.message;
                    if (Err == "Email not found") {
                        setvalue(Err)
                        setisLoading(false)
                    } else if (Err == "Invaild password") {
                        setvalue(Err)
                        setisLoading(false)
                        setError("Invalid Password")
                    } else {
                        if (Err == "Token generated") {
                            localStorage.token = data.data.token;
                            // console.log(token);
                            setloader(false)
                            console.log(data.data.token);
                            Navigate('/Dashboard')
                        }
                    }
                } else {
                    Navigate("/Signup")
                }
            })
        },
        validationSchema: yup.object({
            Email: yup.string()
                .required("This is field is required").email("must be a valid Email"),
            Password: yup.string()
                .required("This is field is required")
        })
    })
    return (
        <>
            <NavBar />
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className='text-center col-md-4'>
                        <img src="https://www.interswitchgroup.com/assets/images/home/interswitch_logo.svg" style={{ width: '200px', marginBottom: "11px" }} className='img-responsive img-fluid' />
                        <h4 style={{ color: "#18425d" }} className='h3'>Welcome To Our Career Page</h4>
                        <p className='text-dark h1'>Login Page</p>
                    </div>
                </div>
                <form onSubmit={formik.handleSubmit}>
                    <div className="row justify-content-center my-3">
                        <div className="col-md-8 col-sm-6 my-3">
                            <div className="row justify-content-center">
                                <div className="col-md-6 text-center my-3">
                                    <p className={value ? 'alert alert-danger' : ""}>{value}</p>
                                    <input type="text" className="inp" name='Email' placeholder="Email" onChange={formik.handleChange} />
                                    <div className='text-danger who'>{formik.errors.Email}</div>
                                    <input type="password" className="inp" name='Password' placeholder="Password" onChange={formik.handleChange} />
                                    <Link to="/Forget"><a href="#" className=' text-decoration-none float-end my-2 h5'>Forget Password</a></Link>
                                    <div className='text-danger who my-3'>{formik.errors.Password}</div>
                                    <div className="text-center">
                                        <button type='submit' className='btn py-2 px-5 me-2' disabled={isloading} style={{ background: " #00425f", color: "white", fontSize: "19px" }}>{isloading ? " Processing... " : "Signin"}</button>
                                        <small className='text-secondary h6'>Don't have an account yet?  <Link to='./Signup'><span>Signup</span></Link></small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <img src={img1} className='img-responsive img-fluid w-300' />
                        </div>
                    </div>
                </form>
            </div >
        </>
    )
}

export default Signin