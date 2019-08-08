    const mongoose = require("mongoose");
    const url_mongo = "mongodb+srv://EiichiMS:chorrillo@eiichim-ossme.mongodb.net/test?retryWrites=true&w=majority";
    mongoose.connect(url_mongo,{useNewUrlParser:true},(err)=>{
        !err 
        ?console.log("Succesfully connected to MongoDB")
        :console.log("Shit")
    });
    const Schema = mongoose.Schema;

    const movieSchema= new Schema ({title:String,year:String,synopsis:{type:String},director:String,cover:[String]},{timestamp:true});

    const Movie = mongoose.model("Movie", movieSchema);
    module.exports={Movie}