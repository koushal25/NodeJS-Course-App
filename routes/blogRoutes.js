const express = require('express');
const Blog = require('../models/blog');

const router = express.Router();



router.get('/blog',(req,res)=>{
    Blog.find().sort({createdAt: -1})
        .then((result)=>{
            res.render('index',{ title : 'All Blogs',blogs :result})
        })
        .catch((err)=>{

        })
});


router.post('/blog',(req,res)=>{

    // console.log(req.body);
    const blog = new Blog(req.body);
    blog.save()
        .then((result)=>{
            res.redirect('/blog');
        })
        .catch((err)=>{
            console.log(err);
        })
})

router.get('/blog/create',(req,res)=>{

    res.render('create' , {title: 'Create a new Blog'});

})

router.get('/blog/:id',(req,res)=>{
    const id = req.params.id;
    // console.log(id);
    Blog.findById(id)
        .then(result => {
            res.render('details',{blog: result,title : 'Blog details'});
            // console.log(id);
        })
        .catch(err =>{
            console.log(err);
        });
})

router.delete('/blog/:id',(req,res)=>{
    const id = req .params.id

    Blog.findByIdAndDelete(id)
    .then(result => {   // here we do not reditect if becoz req has come from browser in ajax ..so we give res in json or text
        res.json({redirect:'/blog'})
    })
    .catch(err =>{
        console.log(err);
    })
})

module.exports = router;