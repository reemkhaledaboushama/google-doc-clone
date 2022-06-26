const mongoose = require("mongoose")
const Document = require("./Document")

mongoose.connect("mongodb+srv://reemaboushama:Kssrmf1234@cluster0.ha1ux.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
})

/*const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://reemaboushama:Kssrmf1234@cluster0.ha1ux.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});*/

const io = require('socket.io')(process.env.PORT, {
    cors: {
        origin: "*" ,
        methods: ['GET' , 'POST'], 
    }, 
},
console.log("init"))
const defaultValue = ""

io.on("connection", socket => {
  socket.on("get-document", async documentId => {
    const document = await findOrCreateDocument(documentId)
    socket.join(documentId)
    socket.emit("load-document",  document.data)

    socket.on("send-changes", delta => {
      socket.broadcast.to(documentId).emit("receive-changes", delta)
    })

    socket.on("save-document", async data => {
      await Document.findByIdAndUpdate(documentId, { data })
    })
  })
})

async function findOrCreateDocument(id) {
  if (id == null) return

  const document = await Document.findById(id)
  if (document) return document
  return await Document.create({ _id: id, data: defaultValue })
}




