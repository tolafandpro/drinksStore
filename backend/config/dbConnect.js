const mongoose = require('mongoose');


const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO)
        console.log("Connected to Database successful")
    } catch (error) {
        console.log("Error connecting to DB")
        throw error;
    }
}

module.exports = dbConnection;