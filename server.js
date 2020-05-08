const express = require("express")
const path = require("path");
const bodyParser = require("body-parser");
const Order = require("./database/models/order_model")


const app = express()
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "10mb" }));

// initialize database connection
require("./database/database")

// routes
app.use(require("./routes/routes"))

// set server to listen
const port = process.env.PORT || 5000
app.listen(port, () =>{
    console.log(`server listening on ${port}`)
})