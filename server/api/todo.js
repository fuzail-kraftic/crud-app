const express = require("express")

const todos = (database) => {
    const router = express.Router()

    // Get all todos
    router.get("/get-all-todos", (req, res) => {
        const query = `SELECT * FROM todo ORDER BY id ASC`;
        database.query(query, (error, result) => {
            if (error) {
                return 
            }else{
                res.json({
                    data: result.rows
                })
            }
        })
    })


    // Get one todo
    router.get("/get-todo/:id", (req, res) => {
        const id = req.params.id
        const query = `SELECT * FROM todo WHERE id = ${id}`;
        database.query(query, (error, result) => {
            if (error) {
                return 
            }else{
                res.json({
                    data: result.rows[0]
                })
            }
        })
    })

    // post one obj
    router.post("/post-todo", (req, res) => {
        let body = req.body
        const insert_query = `INSERT INTO todo(task, is_done) VALUES('${body.task}', ${body.is_done})`
        database.query(insert_query, (error, result) => {
            if (error) {
                console.log(error)
                return 
            }else{
                res.json({
                    data: "Data saved successfully."
                })
            }
        })
    })

    // post one obj
    router.put("/put-todo/:id", (req, res) => {
        let body = req.body
        const insert_query = `UPDATE todo  SET task = '${body.task}', is_done = ${body.is_done} WHERE id=${req.params.id}`
        database.query(insert_query, (error, result) => {
            if (error) {
                console.log(error)
                return 
            }else{
                res.json({
                    data: "Data updated successfully."
                })
            }
        })
    })


    // post one obj
    router.delete("/delete-todo/:id", (req, res) => {
        let body = req.body
        const delete_query = `DELETE FROM todo WHERE id=${req.params.id}`
        database.query(delete_query, (error, result) => {
            if (error) {
                console.log(error)
                return 
            }else{
                res.json({
                    data: "Data deleted successfully."
                })
            }
        })
    })

    return router
}

module.exports = todos