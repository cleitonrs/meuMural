const express = require('express')
const router = express.Router()
const cors = require('cors')
const posts = require('../model/posts')

const corsOptions = {
  origin: "http://localhost:5000"
}

router.use(cors(corsOptions))

router.get("/all", (req, res) => {
  res.json(JSON.stringify(posts.getAll()))
})

router.post("/new", express.json(), (req, res) => {

  let title = req.body.title
  let description = req.body.description

  posts.newPost(title, description)

  res.send("Novo post criado com sucesso!")

})

module.exports = router