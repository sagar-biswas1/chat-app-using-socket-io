const {Schema,model}=  require("mongoose")

const ChatSchema= Schema({
    members:{
        type:Array
    },
},{
    timestamps:true
})

const ChatModel = model("Chat", ChatSchema);

module.exports= ChatModel