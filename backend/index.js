const cookieParser = require('cookie-parser');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();
dotenv.config();
const PORT = 5000;
const dbConnection = require('./config/dbConnect');


//APi Route
const authRoute = require('./routes/authRoute');
// const userRoute = require('./routes/userRoute');


app.use(cors());
app.use(express.json());
app.use(cookieParser());

// Api Routes section
app.use("/api/auth", authRoute);
// app.use("/api/user", userRoute);

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong";
    return res.status(errorStatus).json(errorMessage);
});

app.listen(PORT || 5000, () => {
    dbConnection();
    console.log(`App listing to ${PORT}`);
});