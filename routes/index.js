const express = require("express");
const router = express.Router();
const { getAllMessages, addMessage } = require("../db/queries");

// let messages;

router.get("/", async (req, res) => {
    const messages = await getAllMessages();
    res.render("index", {
        title: "Mini Messageboard",
        messages
    })
})

router.get("/new", (req, res) => {
    res.render("new", {title: "New Message"});
})

router.post("/new", async (req, res) => {
    const { user, text } = req.body;
    await addMessage(user, text);
    res.redirect("/");
})

module.exports = router;

