const { Router } = require('express'); 
const { callbackPaymentWebhook } = require("./Prodamus");
const router = Router();



// payment
router.post("/api/prodamus", callbackPaymentWebhook); 

router.get("/", (req, res) => {
  //console.log(req)
  console.log("Запрос с главной!");

  res.render("index", {
    title: "Main Stoicismus page...",
  });
});

module.exports =  router; 