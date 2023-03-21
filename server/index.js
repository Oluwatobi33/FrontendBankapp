const express = require('express')
const app = express()
const PORT = process.env.PORT
const ejs = require('ejs')
const cors = require('cors')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
require("dotenv").config()
const mongoose = require('mongoose')
const cloudinary = require('cloudinary')

const { uploadfile, signup, signin, Interdisplay, login, accno, pin, update, history, createhistory } = require('./control/usercontroller')

// const { sendmail } = require('./mailler')
app.set("view engine", "ejs");
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }))

mongoose.connect(process.env.URI, { useNewUrlParser: true, useUnifiedTopology: true, }).then((res) => {
    console.log("connected successfuly to mongoose");
}).catch(err => {
    console.log(err);
})

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

app.post('/signup', signup)
app.post("/signin", login)

app.post('/signin', signin)

app.post("/history", history)
app.get("/dashboard", Interdisplay)
app.post('/upload', uploadfile)
app.post('/accno', accno)
app.post('/pin', pin)
app.post('/update', update)
app.post('createhistory', createhistory)



app.get('/', (req, res) => {
    res.render("Home")
})

// app.get('/', (req, res) => {
//     // res.sendFile(__dirname + '/index.html')
//     res.render('inde.ejs', { name: "kunle" })

// });

app.post('/reg', (req, res) => {
    const userinfo = new UserModel({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password
    });
    // console.log(userinfo);
    UserModel.create(function (err) {
        if (!err) {
            res.redirect("/display");
        }
    })
});
app.get('/display', (req, res) => {
    res.render('display')

});
app.get('/reg', (req, res) => {
    res.render('reg')
});
app.post('/new-user', (req, res) => {
    const userDetails = req.body
    UserModel.create(userDetails, (error, message) => {
        if (error) {
            console.log(error);
        } else {
            console.log(message);
            res.redirect("/home")
        }
    })
    // console.log(userDetails);
});
// app.get('/home', (req, res) => {
//     UserModel.find((error, result) => {
//         if (error) {
//             console.log(error);
//         } else {
//             console.log(result);
//             res.render('redirect.ejs', { allUser: result })

//         }
//     })
// });
app.post('/edit', (req, res) => {
    let id = req.body.id;
    UserModel.find({ _id: id }, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
            res.render('edit', { result })

        }
    })
});
app.post('/update', (req, res) => {
    let id = req.body.id;
    let updated = req.body;
    UserModel.findByIdAndUpdate(id, updated, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
            res.redirect('/home')
        }
    })
})
// const multer = require('multer')
// const upload = multer({ dest: "/images" })
// app.post("/upload", upload.single("image"), (req, res) => {
//     res.send("success")
// })
app.post('/delete', (req, res) => {
    // const { id } = req.body
    // let id = (req.body._id);
    console.log(req.body);
    // UserModel.findOneAndDelete({ _id: id }, (err, result) => {
    //     if (err) {
    //         console.log(err);
    //     } else {
    //         console.log(result);
    //         res.redirect('/home')

    //     }
    // })
})
app.listen(5500, () => {
    // sendmail("bakareemmanuel2233@gmail.com")
    console.log("connected successfully");
})