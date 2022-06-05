const express = require('express')
const router = express.Router()
const Movie = require('../models/movie')
const auth = require("../middleware/auth");

router.get('/', async(req,res) => {
    try{
           const movies = await Movie.find()
           res.json(movies)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.get('/:id', async(req,res) => {
    try{
           const movies = await Movie.findById(req.params.id)
           res.json(movies)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.post('/', async(req,res) => {
    const movies = new Movie({
        title: req.body.title,
        descriptions: req.body.descriptions,
        cast: req.body.cast
    })

    try{
        const a1 =  await movies.save() 
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
})

module.exports = router