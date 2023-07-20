const fs = require('fs');


// Reading files

// fs.readFile('./text.txt',(err,data)=>{
//     if(err)
//     {
//         console.log(err);
//     }
//     console.log(data.toString());
// })

// // writing files

// fs.writeFile('./text.txt','hello world',()=>{
//     console.log("file was written");
// });


// directories

// if(!fs.existsSync('./trial'))
// {
//     fs.mkdir('./trial',(err)=>{
//         if(err)
//         {
//          console.log(err);
//         }
//         console.log("folder created");
//     });
// }
// else{
//     fs.rmdir('./trial',()=>{
//         console.log("folder deleted");
//     })
// }


//deleting files

if(fs.existsSync('./deleteme.txt'))
{
    fs.unlink('./deleteme.txt',(err)=>{
        if(err)
        {
            console.log(err);
        }
        else{
            console.log('file deleted');
        }
    })
}


// read stream 

const readStream = fs.createReadStream('./text.txt', {encoding : 'utf8'});


readStream.on('data',(chunk)=>{
    console.log(chunk);
})


// const writeStream = fs.createWriteStream(.....);

//  readStream.pipe(writeStream)

