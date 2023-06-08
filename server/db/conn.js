const mongoose=require('mongoose');

//mongodb://localhost:27017/userdata

mongoose.connect("mongodb+srv://sidharth:sidharth@cluster0.hi7lpfj.mongodb.net/?retryWrites=true&w=majority",
{useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify:false
}).then(()=>{
    console.log("Database Connected with Atlas");
}).catch((err)=>{
    console.log("No Connection to Database");
})