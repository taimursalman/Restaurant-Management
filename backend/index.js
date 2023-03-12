import app from "./server.js"
import mongodb from "mongodb"
import dotenv from "dotenv"
dotenv.config()


const MongoClient = mongodb.MongoClient
const port = process.env.PORT || 8000

MongoClient.connect(
    process.env.RESTREVIEWS_DB_URI, {
        maxPoolSize: 50, //Number of connections
        writeConcern: {wtimeout: 2500},
        // useNewUrlParse: true,
    }
).catch(err => {
    console.log("Error encountered while connecting mongodb")
    console.log(err)
    process.exit(1)
})
.then(async client => {
    app.listen(port, () => {
        console.log(`listening on ${port}`)
    })
})
