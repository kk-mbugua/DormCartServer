const express = require("express")
const router = express.Router()

router.use("/orders", require("./order_routes"))

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
router.get("*", (req, res) => {
    console.log("url does not match:", req.originalUrl)
    res.status(404).send('please input a relevant url')
  });

module.exports = router