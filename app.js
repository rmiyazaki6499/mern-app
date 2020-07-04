const express = require("express")
const cors = require("cors")
const path = require("path")
const mongoSanitize = require("express-mongo-sanitize")

// start app
const app = express()

// Express port
const port = process.env.PORT || 5000
// const db = process.env.DATABASE

// CORS
app.use(cors())

// Serve static files
app.use(express.static(path.join(__dirname, 'client', 'build')))

// Sanitize against NoSQL query injections
app.use(mongoSanitize())


// Database
// mongoose
//     .connect(db, {
//         useNewUrlParser: true,
//         useCreateIndex: true,
//         useFindAndModify: false,
//         useUnifiedTopology: true,
//     })
//     .then(() => {
//         console.log("Database is connected.")
//     })
//     .catch((err) => {
//         console.log("Database connection was unsuccessful.")
//         console.log(err)
//         process.exit(1)
//     })

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

