const {Schema,model}=  require("mongoose")

const MessageSchema = Schema(
 { chatId:{
    type:String
 },senderId:{
    type:String
 },text:{
    type:String
 }
 },{
    timestamp:true
 }
);

const MessageModel = model("Message",MessageSchema);

module.exports= MessageModel;
