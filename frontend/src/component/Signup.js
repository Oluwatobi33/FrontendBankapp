import React from "react";
import { Link, } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import register from "../assest/image/register.webp"
import { useFormik } from "formik";
import * as yup from "yup"
import axios from "axios";
import { baseurl } from "./Endpoint";
import { useNavigate } from "react-router-dom";
const Signup = () => {
    const Navigate = useNavigate()
    // const [fullname, setfullname] = useState("")
    // const [email, setemail] = useState("")
    // const [password, setpassword] = useState(""
    // const [phoneNumber, setphoneNumber] = useState("")
    const [allUsers, setallUsers] = useState("")
    // const [success, setsuccess] = useState("")
    // const [sign, setsign] = useState("")
    const [isloading, setisLoading] = useState(false)
    const [Error, setError] = useState("")
    // const [err, seterr] = useState("")
    // const [history, sethistory] = useState([])
    // useEffect(() => {
    //     if (localStorage.Interswitch) {
    //         let inform = JSON.parse(localStorage.Interswitch)
    //         setallUsers(inform)
    //     } else {
    //         setallUsers([])
    //     }
    // }, [])
    // let BankDetails = {
    //     accno: `0210${Math.floor(Math.random() * 1000000)}`,
    //     cardno: `431${Math.floor(Math.random() * 100000000)}`,
    //     bvn: `356890${Math.floor(Math.random() * 1000000)}`,
    //     defaultMoney: `400 ${Math.floor(Math.random() * 100)}`
    // }
    let date = new Date().getDate()
    let month = new Date().getMonth()
    let year = new Date().getFullYear()
    let time = new Date().toLocaleTimeString();
    let DateCreated = `${(date)}-${(month)}-${(year)}-${(time)}`
    const formik = useFormik({
        initialValues: {
            Fullname: "",
            Email: "",
            Password: "",
            Pin: "",
            PhoneNumber: "",
            // cardno: `431${Math.floor(Math.random() * 100000000)}`,
            bvn: `356890${Math.floor(Math.random() * 100000)}`,
            defaultMoney: 0,
            DateCreated,
            history: ""
        },
        onSubmit: (values) => {
            setisLoading(true)
            let userdata = { Fullname: values.Fullname, Email: values.Email, Password: values.Password, Pin: values.Pin, PhoneNumber: values.PhoneNumber, accno: values.accno, bvn: `356890${Math.floor(Math.random() * 100000)}`, defaultMoney: values.defaultMoney, DateCreated, history: values.history }
            // console.log(userdata);
            axios.post(`${baseurl}signup`, userdata).then((credentials) => {
                setisLoading(false)
                if (credentials) {
                    let Err = credentials.data.message
                    console.log(Err);
                    if (Err == "Email already used") {
                        setError("Email is used")
                    }
                    else if (Err == "Phone-Number already used") {
                        setError("Phone-Number is used")
                    } else {
                        Navigate('/Signin')
                    }

                }
            })
        },
        validationSchema: yup.object({
            Fullname: yup.string()
                .required("This is field is required").min(5, "Must have at least 5 character"),
            Email: yup.string()
                .required("This is field is required").min(5, "Must have at least 5 character"),
            Password: yup.string()
                .required("This is field is required").min(5, "Must have at least 10 character"),
            Pin: yup.string()
                .required("This is field is required").max(4, "Must have 4 character"),
            PhoneNumber: yup.string()
                .required("This is field is required").min(10, "Must have at least 11 character")
        })

    })

    // const submit = () => {
    //     if (fullname !== "" && email !== "" && password !== "" && phoneNumber !== "") {
    //         let accno = `0210${Math.floor(Math.random() * 1000000)}`
    //         let cardno = `431${Math.floor(Math.random() * 100000000)}`
    //         let bvn = `356890${Math.floor(Math.random() * 1000000)}`
    //         let defaultMoney = `400 ${Math.floor(Math.random() * 100)}`
    //         let User = { fullname, email, password, phoneNumber, accno, cardno, bvn, defaultMoney, history }
    //         // let takeRandom = math
    //         setallUsers(() => {
    //             let applicant = [...allUsers, User]
    //             localStorage.tobi = JSON.stringify(applicant)
    //             Navigate('/Signin')
    //             return applicant
    //         })
    //     } else {
    //         let err = "Pls Enter the values of the input to register your account"
    //         seterr(err)
    //     }
    return (
        <>
            <NavBar />
            <div className="container">
                <div className="row py-5">
                    <div className="col-md-6 col-sm-6">
                        <div className="row">
                            <div className="text-center">
                                <img src="https://www.interswitchgroup.com/assets/images/home/interswitch_logo.svg" style={{ width: '300px', marginBottom: "11px" }} className='img-responsive img-fluid' />
                                <h4 style={{ color: "black" }}>Create an account</h4>
                            </div>
                        </div>
                        <form action="" onSubmit={formik.handleSubmit} autoComplete="off">
                            <div className="row">
                                <p className={Error == "" ? "" : "alert alert-danger"}>{Error}</p>
                                <p className={allUsers == "" ? "" : "alert alert-success"}>{allUsers}</p>
                                <div className="col-md-12 ">
                                    <input type="text" className=" inp" name="Fullname" onChange={formik.handleChange} placeholder="Enter Your FullName" />
                                    <div className='text-danger who'>{formik.errors.Fullname}</div>
                                </div>
                            </div>
                            <div className="row justifty-content-center text-center my-3">
                                <div className="col-md-6 ">
                                    <input type="email" className="inp" name="Email" onChange={formik.handleChange} placeholder="Email" />
                                    <div className='text-danger who'>{formik.errors.Email}</div>
                                </div>
                                <div className="col-md-6 ">
                                    <input type="password" className="inp" name="Password" onChange={formik.handleChange} placeholder="Password" />
                                    <div className='text-danger who'>{formik.errors.Password}</div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 ">
                                    <input type="number" className="inp" name="PhoneNumber" onChange={formik.handleChange} placeholder="PhoneNumber" />
                                    <div className='text-danger who'>{formik.errors.PhoneNumber}</div>
                                </div>
                                <div className="col-md-6">
                                    <input type="password" className="inp" max={4} name="Pin" onChange={formik.handleChange} placeholder="pin" />
                                    <div className='text-danger who'>{formik.errors.Pin}</div>
                                </div>
                            </div>
                            <center>
                                <button type="submit" className="btn  btn-lg btn-primary mt-4 fst-italic" disabled={isloading} style={{ background: " #00425f;" }}>{isloading ? " Processing... " : "Signup"}</button>
                                <p className="text-dark h4">Already Have an Account?<Link to='/signin' className="px-3 fs-4 fst-italic">SIGNIN</Link></p>
                            </center>
                        </form>
                    </div>
                    <div className="col-md-6 col-sm-6">
                        <img src={register} className='img-responsive img-fluid' />
                    </div>
                </div>
            </div >
        </>
    );
};
export default Signup;
