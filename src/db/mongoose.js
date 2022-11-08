const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
}).then(() => {
    console.log("Success connecting to mongoDB database!")
}).catch(error => {
    console.error("Error connecting to mongoDB database: ", error)
})