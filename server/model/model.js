const mongoose = require('mongoose')
const { genSalt, hash } = require("bcrypt")
const bcrypt = require('bcrypt')
const UserSchema = new mongoose.Schema(
    {
        file: String,
        firstname: String,
        userid: String,
    }
)

UserSchema.pre("save", async function (next) {
    let { Password } = this;
    let salt = await bcrypt.genSalt(10);
    let hashed = await bcrypt.hash(Password, salt);
    this.Password = hashed;
    this.Email = Email.toLowerCase();
    next()
})

const InterswitchSchema = new mongoose.Schema(
    {
        DateCreated: String,
        Fullname: String,
        Email: String,
        Password: String,
        balance: Number,
        Pin: String,
        PhoneNumber: {
            type: String,
            unique: true,
        },
        bvn: {
            type: String,
            unique: true,
        },
        accountNumber: String,

    }
)

InterswitchSchema.pre("save", async function (next) {
    const { Password } = this
    const salt = await genSalt(10)
    try {
        const hashedPassword = await hash(Password, salt)
        this.Password = hashedPassword
        next()
        console.log(this.Password);
    } catch (error) {
        console.log(error);
    }
})

InterswitchSchema.pre("save", async function (next) {
    const { Pin } = this
    const salt = await genSalt(10)
    // console.log(salt);
    try {
        const hashedPin = await hash(Pin, salt)
        this.Pin = hashedPin
        next()
        console.log(this.Pin);
    } catch (error) {
        console.log(error);
    }
})

const historySchema = new mongoose.Schema(
    {
        customerId: String,
        Fullname: String,
        pBalance: String,
        Tbalance: String,
        added: String,
        transfer: String,
        received: String,
        accountNumber: String,
        transactiontime: String
    }
)
const historyModel = mongoose.model('historys', historySchema)
const RegisterModel = mongoose.model('Allinterswitch', InterswitchSchema)
const UserModel = mongoose.model('AllDetails', UserSchema)
module.exports = { UserModel, RegisterModel, historyModel }