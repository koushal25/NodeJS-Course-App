const { truncate } = require('lodash');
const mong = require('mongoose');
const Schema = mong.Schema;

const blogSchema = new Schema({

    title : {
        type : String,
        required : true 
        },
    snippet : {
        type : String,
        required : true 
        },
    body : {
        type : String,
        required : true 
    }
    
},{timestamps: true});


const Blog = mong.model('Blogs',blogSchema);
module.exports = Blog;