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
        PhoneNumber: {
            type: String,
            unique: true,
        },
        accno: String,
        bvn: {
            type: String,
            unique: true,
        },
        defaultMoney: Number,
    }
)

InterswitchSchema.pre("save", async function () {
    const { Password } = this
    const salt = await genSalt(10)
    // console.log(salt);
    try {
        const hashedPassword = await hash(Password, salt)
        this.Password = hashedPassword
        console.log(this.Password);
    } catch (error) {
        console.log(error);
    }
})

const RegisterModel = mongoose.model('Allinterswitch', InterswitchSchema)
const UserModel = mongoose.model('AllDetails', UserSchema)
module.exports = { UserModel, RegisterModel }