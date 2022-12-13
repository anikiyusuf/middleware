const express = require("express")
const { generateImage} = require("../controller/openaiController")
const router = express.Router()



router.post("/generateImage" , generateImage)

module.exports = router