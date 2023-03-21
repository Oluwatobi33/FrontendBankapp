const { express } = require("express");
const cloudinary = require('cloudinary');
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')
// const emmanuel = require("JSON_SECRET")
const { UserModel, RegisterModel, historyModel } = require("../model/model");

const { customermail, useraccountNumber, userName } = require('../mailler')
require('dotenv').config()

const signup = (req, res) => {
    const details = req.body
    let useremail = req.body.Email
    let Email = req.body.Email
    let accno = req.body.accno
    let PhoneNumber = req.body.PhoneNumber
    let FullName = req.body.FullName
    RegisterModel.find({ Email }, (err, result) => {
        if (err) { } else {
            if (result == "") {
                RegisterModel.find({ PhoneNumber }, (err, result) => {
                    if (err) { } else {
                        if (result == "") {
                            RegisterModel.create(details, (err) => {
                                if (err) { } else {
                                    userName(FullName)
                                    useraccountNumber(accno)
                                    customermail(useremail)
                                    res.send({ message: "saved", status: true })
                                }
                            })
                        } else {
                            res.send({ message: "Phone-Number already used", status: false })
                        }
                    }
                })
            } else {
                res.send({ message: "Email already used", status: false })
            }
        }
    })
}

const login = (req, res) => {
    const { Email, Password } = req.body;
    RegisterModel.findOne({ Email }, async (err, message) => {
        console.log(message);
        if (err) {
            res.send(err)
        } else {
            if (!message) {
                res.send({ status: false, message: "Email not found" })
            }
            else {
                const validPassword = await bcrypt.compare(Password, message.Password);
                if (validPassword) {
                    const token = jwt.sign({ _id: message._id }, process.env.JWT_SECRET, { expiresIn: "2h" })
                    res.send({ token, message: "Token generated", status: true });
                } else {
                    res.send({ status: false, message: "Invaild password" })
                }
            }
        }
    })
}

const accno = (req, res) => {
    const accno = req.body.account
    console.log(accno);
    RegisterModel.find({ accno }, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            if (result == [""]) {
                res.send({ message: "Invalid account", status: true, result })
            } else {
                res.send({ message: "Valid account", status: true, result })
            }
        }
    })
}

const pin = (req, res) => {
    const { pin, customerId } = req.body
    RegisterModel.find({ _id: customerId }, async (err, result) => {
        if (err) {
            console.log(err);
        } else {
            if (result == "") {
                res.send({ message: "Invalid customerId", status: false, })
            } else {
                const validPin = await bcrypt.compare(pin, result[0].Pin);
                console.log(validPin);
                if (validPin) {
                    res.send({ message: "Valid pin", status: true, result })
                } else {
                    res.send({ message: "Invalid pin", status: false })
                }
            }
        }
    })
}


const update = (req, res) => {
    let _id = req.body._id
    let FullName = req.body.FullName
    console.log(update);
    console.log(_id);
    RegisterModel.findByIdAndUpdate({ _id }, { 'FullName': req.body.FullName }, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send({ message: "updated", result })
        }
    })
}

const createhistory = (req, res) => {
    let customerId = req.body.customerId
    historyModel.find({ customerId }, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            if (result == "") {
                res.send({ status: false, message: "No history yet" })
            } else {
                res.send({ result, status: true, message: "history seen" })
                console.log(result);
            }
        }
    })
}

const history = (req, res) => {
    let inform = req.body;
    historyModel.create(inform, (err, result) => {
        if (err) { } else {
            res.send({ result })
        }
    })
}


const Interdisplay = (req, res) => {
    const token = req.headers.authorization.split(' ')[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, result) => {
        if (err) {
            res.send({ status: false, message: "Invalid Token" })
        } else {
            let id = result._id
            RegisterModel.find({ _id: id }, (err, result) => {
                if (err) {
                    res.send(err);
                } else {
                    if (result.length > 0) {
                        res.send({ result, status: true, message: "Valid Token" })
                        console.log(result);
                    }
                    else {
                        res.send({ message: "empty array" })
                    }
                }
            })
        }
    })

}


const signin = (req, res) => {
    const { Email, Password } = req.body
    SignupModel.findOne({ Email }, async (err, message) => {
        if (err) {
            res.send(err)
        } else {
            if (!message) {
                res.send({ status: false, message: "Email is not found" })
            }
            else {
                const validPassword = await bcrypt.compare(Password, message.Password);
                if (validPassword) {
                    const token = jwt.sign({ _id: message._id }, process.env.JSON_SECRET, { expiresIn: 60 })
                    res.send({ token, message: "Token generated", status: true });
                } else {
                    res.send({ status: false, message: "invalid Password" })
                }
            }
        }
    })
}

const dashboard = (req, res) => {
    const token = req.headers.authorization.split(' ')[1];
    jwt.verify(token, process.env.JSON_SECRET, (err, decoded) => {
        if (err) {
            res.send({ status: false, message: "Invalid token" })
        } else {
            let id = decoded._id;
            SignupModel.find({ _id: id }, (err, result) => {
                if (err) {
                    res.send(err);
                } else {
                    if (result.length > 0) {
                        res.send({ result, status: true, message: "Valid token" })
                    } else {
                        console.log(result);
                        res.send({ message: "empty array" })
                    }
                }
            })
        }
    })
}

const uploadfile = (req, res) => {
    let userfile = req.body.file;
    cloudinary.v2.uploader.upload(userfile, { folder: "sqi" }, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            let myimage = result.url;
            UserModel.create({ ...req.body, file: myimage, }, (err, result) => {
                if (err) {
                    res.send({ message: "Unsaved", status: false })
                } else {
                    res.send({ message: "saved", status: true })
                }
            })
        }
    })
}

const getDetails = (request, response) => {
    UserModel.find((err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
            response.redirect("/home", { allUser: result })
        }
    })
}
module.exports = { uploadfile, signup, signin, login, Interdisplay, accno, pin, dashboard, update, history, createhistory }
