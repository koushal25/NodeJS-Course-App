const express = require('express');
const morgan = require('morgan');
const mongoo = require('mongoose');

const blogRoutes = require('./routes/blogRoutes');

//express app
const app = express();


//Connect to mongoDB
// const dbURI ='mongodb+srv://123:123@clustertrial.zeuuihd.mongodb.net/dataTrial?retryWrites=true&w=majority';
const dbURI ='mongodb+srv://123:123@cluster0.cthougu.mongodb.net/?retryWrites=true&w=majority';

mongoo.set('strictQuery', true);
mongoo.connect(dbURI,{useNewUrlParser : true,useUnifiedTopology: true}).then((result)=> app.listen(3000))
.catch((err)=> console.log(err));

//register view engines
app.set('view engine','ejs'); // default is view folder
// app.set('views','myviews');  // If we wanna change default folder

//listen for request
// app.listen(3000);

// middleware and static files
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(morgan('dev'));


//mongoose and mongo sandbox routes
// app.get('/add-blog',(req,res)=>{

//     const blog = new Blog({
//         title :'my blog 2',
//         snippet:'my new blog is here',
//         body:'Dont read it is bore '
//     });

//     blog.save().then((result)=>{
//         res.send(result);
//     })
//     .catch((err)=>{
//         console.log(err);
//     });
// });

// app.get('/all-blogs',(req,res)=>{

//     Blog.find()
//         .then((result)=>{
//             res.send(result);
//         })
//             .catch((err)=>{
//                 console.log(err);
//             });
// });



//middleware
// app.use((req,res,next)=>{
//     console.log('new request made :');
//     console.log('host :', req.hostname);
//     console.log('path',req.path);
//     console.log('method :',req.method);
//     next();
// })

//blog routes
// app.use('blogRoutes');

app.use('blogRoutes');

app.get('/',(req,res)=>{

    // res.send('<p> Hello i m home page</p>');
    // const blogs = [
    //     { title: " Yo yo ", snippet: "hello how you do , im fine "},
    //     { title: " get lost ", snippet: "get lost , i m okay, mand ur own busizes "},
    //     { title: " gao bc ", snippet: "fuakt dukan rkaun basla"},
    // ]

    // res.render('index',{title : 'Home',blogs});

    res.redirect('/blog');

})




app.get('/about',(req,res)=>{

    // res.sendFile('./views/about.html',{root : __dirname});

    res.render('about');

})



//Redirects
app.get('/about-us',(req,res)=>{

    res.redirect('/about');
})



//404 page
// it uses this function for every req if the above get req are not fired.
app.use((req,res)=>{

    // res.status(404).sendFile('./views/404.html',{root : __dirname});

    res.status(404).render('404');
})