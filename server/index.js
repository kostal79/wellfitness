require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const passport = require("passport")
const router = require("./routes/index");
require("./passport")
const app = express()
const PORT = process.env.PORT || 5000;
const session = require("express-session")
const cookieParser = require("cookie-parser")

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.json());
app.use(express.static("static"));

//cors middleware
app.use(
    cors({
        origin: process.env.CLIENT_URL,
        methods: "GET,POST,PUT,DELETE",
        credentials: true,
    })
    );
    
//session middleware
app.use(session({
    secret: process.env.SECRET_SESSION,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60 * 60 * 1000 },
}))

//passport 
app.use(passport.initialize());
app.use(passport.session());


app.use("/api", router)


const start = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
        app.listen(PORT, () => {
            console.log(`server starts at port ${PORT}`)
        })
    } catch (error) {
        console.error(error)
    }
}

start()