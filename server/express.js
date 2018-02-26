const express = require("express")
const path = require("path")
const body_parser = require("body-parser")

//api files
const todos_api = require("./api/todo")

const app = express()

const express_func = (database) => {
    const app = express()
    app.use(body_parser.json())
    app.use(body_parser.urlencoded({extended: false}))

    //Cross origin
    app.use(function(req, res, next) { //allow cross origin requests
        res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header("Access-Control-Allow-Credentials", true);
        next();
    });

    app.use("/todos", todos_api(database))
    return app
}

module.exports = express_func