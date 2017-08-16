const express = require('express')
    , router = express.Router()

// /posts

// post index
router.get('/', function (req, res) {
  res.send('test')
})

// post show
router.get('/:id([0-9]+)', function (req, res) {
  res.send('test')
})

// post new
router.get('/new', function (req, res) {
  let json = req.body
  res.json(json)
})

// post create
router.post('/', function (req, res) {
  let json = req.body
  res.json(json)
})

// post update
router.put('/', function (req, res) {
  let json = req.body
  res.json(json)
})

// post delete
router.delete('/', function (req, res) {
  let json = req.body
  res.json(json)
})

module.exports = router
