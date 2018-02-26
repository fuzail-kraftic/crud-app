require("dotenv").config()
const express_app = require("./server/express")
const pg = require("pg")
const port = 3000
const client = new pg.Client(process.env.DB_CONNECTION)

client.connect((error, db) => {
    if (error) {
        console.log("DB ERR")
        console.log(error)
        return
    }
    console.log("Connecton established :)")

    express_app(db).listen(port, () => {
        database = db
        console.log("Connecting to app on port: " + port)
    })
})
