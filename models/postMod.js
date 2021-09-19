const  {Schema, model} = require("mongoose");

const postSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    website:{
        type:String,
        required:true
    },
    fraudType:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    comments:{
        type:Array,
        default:[]
    },
    upvotes:{
        type:Array,
        default:[]
    },
    downvotes:{
        type:Array,
        default:[]
    }
},
{
    timestamps:true
}
)

module.exports = model("post",postSchema);