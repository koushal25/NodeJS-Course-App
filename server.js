const http = require('http'); //http module
const fs = require('fs');
const _ = require('lodash');


const server= http.createServer((req,res)=>{   //req res are objects
    // console.log(req.method);

    //lodash
    const num = _.random(0,20);
    console.log(num);

    // set header content type

    res.setHeader('Content-Type','text/html');

    // res.write('<p> hello koushal </p>');


    let path='./views/';

    switch(req.url)
    {
        case '/':
            path+='index.html';
            break;
        case '/about':
            path+='about.html';
            break;
        default:
            path+='404.html';
            break;
    }
   
   // send an html file

   fs.readFile(path,(err,data)=>{
        if(err)
        {
            console.log(err);
            res.end();
        }
        else{
            // res.write(data);
           res.end(data);
        }
   });
    // res.end();

});


server.listen(3000,'localhost',()=>{
    console.log('listening for req on port 3000')
});