const express = require('express');
const path = require('path');
const router = express.Router();
const blogs= require("../data/blogs")

router.get('/', (req, res) => {
    // res.sendFile( path.join(__dirname, '..', 'templates/index.html'));
    res.render('home')             //handlebars ka syntax
    
});

router.get('/blog', (req, res) => {
    res.render('blogpage',{blogs:blogs})    //var pass
});


router.get('/blogpost/:author', (req, res) => {
    const author = req.params.author;
    const myBlog = blogs.find(blog => blog.author === author);

    if (myBlog) {
        res.render('blogpost', {
            title: myBlog.title,
            author: myBlog.author,
            category: myBlog.category,
            description: myBlog.description,
            content: myBlog.content,
            date: myBlog.date,
            likes: myBlog.likes,
            comments: myBlog.comments,
            image: myBlog.image
        });
    } else {
        res.status(404).send('Blog post not found.');
    }
});



module.exports = router;
