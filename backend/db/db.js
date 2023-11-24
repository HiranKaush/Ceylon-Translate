const mongoose = require('mongoose')

const db = async = async() => {
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Db Connected")
    } catch (error) {
        console.log(error)
    }
}

module.exports = {db}