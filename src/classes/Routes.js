const { Router } = require('express'); 
const { callbackPaymentWebhook } = require("./Prodamus");
const router = Router();

router.get("/", (req, res) => {
  //console.log(req)
  console.log("Запрос с главной!");

  res.render("index", {
    title: "Main Stoicismus page...",
  });
});

// payment
router.post("/api/prodamus", callbackPaymentWebhook); 

module.exports =  router; 