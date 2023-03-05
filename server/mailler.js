const nodemailer = require("nodemailer")

// let date = new Date().toLocaleString();

let saccountNumber
let sName
const useraccountNumber = (accno) => {
    saccountNumber = accno;
}

const userName = (FullName) => {
    sName = FullName;
}

const customermail = async (emails) => {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.email',
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.MAIL_PASSWORD
        }
    })

    let inform = await transporter.sendMail({
        from: process.env.EMAIL,
        to: emails,
        subject: "Interswitch group",
        html: ``
    })
    console.log(inform);
}
const adminmail = async (emails) => {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        host: "smtp.gmail.email",
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.MAIL_PASSWORD
        }
    })

}
module.exports = { customermail, useraccountNumber, userName, adminmail }