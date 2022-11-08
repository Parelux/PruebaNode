const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
}).then(result => {
    console.log("Success connecting to mongoDB")
}).catch(error => {
    console.error("Error connecting..",error)
})