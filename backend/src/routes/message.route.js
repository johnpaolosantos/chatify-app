import express from "express";

const router = express.Router();

router.get("/send", (req, res) => {
    res.send("sent message endpoiint")
});


export default router;