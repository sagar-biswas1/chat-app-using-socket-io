const express=  require("express");
const mongoose= require("mongoose")

const app= express()
const port =4000


const url = `mongodb+srv://sagar:NvkM6By0v8n3wPMY@cluster0.xkom1i8.mongodb.net/?retryWrites=true&w=majority`;

app.use(express.json())

app.use("/chat", require("./routes/ChatRoute.js"));
app.use("/message", require("./routes/MessageRoute.js"));



main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(url);
  console.log("connected to db")
     app.listen(port, () => {
     console.log("server started");})
}


 





