const express = require("express");
const router = express.Router();
const Order = require("../database/models/order_model");

router.post("/new_order", (req, res) => {
  const new_order = new Order(req.body);
  new_order.save((err, result)=>{
    if (err) {
      console.error(err)
      res.status(400).send(err)
    }
    if (result) {
      res.status(200).send(result)
    }
  });
});

router.get("/all", (req, res) => {
  Order.find({}, (err, result) => {
    if (err) {
      console.error(err);
      res.status(400).send(err)
    }
    if (result) {
      res.status(200).send(result)
    }
  });
});

router.get("/by_university/:uni", (req, res) => {
  const uni = req.params.uni;
  Order.find({ university: uni }, (err, result) => {
    if (err) {
      console.error(err)
      res.status(400).send(err)
    }
    if (result) {
      res.status(200).send(result)
    }
  });
});

module.exports = router;
