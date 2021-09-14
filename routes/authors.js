const express = require('express')
const router = express.Router()
const Author = require('../models/author')

// Route for all authors
router.get('/', (req, res) => {
    res.render('authors/index')
})

// New route for authors
router.get('/new', (req, res) => {
    res.render('authors/new', { author: new Author() })
})

// Create route for author
router.post('/', (req, res) => {
    const author = new Author({
        name: req.body.name
    })
    author.save((err, newAuthor) => {
        if (err) {
            res.render('authors/new', {
                author: author,
                errorMessage: 'Error creating author.' 
            })
        } else {
            // res...
            res.redirect(`authors`)
        }
        
    })
})

module.exports = router