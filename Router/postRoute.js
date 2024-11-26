const { Router } = require("express");
const { sendData } = require("../Controller/PostController");

const router = Router();

router.post("/create", sendData);
module.exports= router;