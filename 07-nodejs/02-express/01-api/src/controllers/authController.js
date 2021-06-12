const express = require("express")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const UserModel = require("../models/user")
const authConfig = require("../config/auth.json")

const router = express.Router()

router.post("/register", async (req, res) => {
    const { email } = req.body

    try {
        if (await UserModel.findOne({ email }))
            return res
                .status(400)
                .send({ error: "User already exists" })

        const newUser = await UserModel.create(req.body)

        newUser.password = undefined
        return res.send({ newUser })
    } catch (e) {
        return res.status(400).send(e)
    }
})

router.post("/authenticate", async (req, res) => {
    const { email, password } = req.body

    const user = await UserModel
        .findOne({ email }).select("+password")

    if (!user)
        return res.status(400).send({ error: "User not found" })

    if (!await bcrypt.compareSync(password, user.password))
        return res.status(400).send({ erros: "Invalid password" })

    jwt.sign({ id: user._id }, authConfig.secret, {
        expiresIn: 60 * 60 * 24
    })
    user.password = undefined
    res.send(user)
})

module.exports = app => app.use("/auth", router)