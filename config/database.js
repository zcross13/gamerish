//Database configuration
const mongoose = require('mongoose')

// Database connection options 
const options = {
    useNewUrlParser: true, 
    useUnifiedTopology: true,  
    // Add connection timeout 
    serverSelectionTimeoutMS: 5000, 
    // Add socket timeout
    socketTimeoutMS: 45000,
}

mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error:', err)
})

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB')
})

mongoose.connection.on('disconnected', () => {
    console.log('Disconnected from MongoDB')
})

const connectDB = async () => {
    try{
        await mongoose.connect(MONGO_URI, options)
    } catch(err){
        console.error("Error connecting to MongoDB:", err)
        process.exit(1)
    }
}

module.exports = {
    connection: mongoose.connection, 
    connectDB
}