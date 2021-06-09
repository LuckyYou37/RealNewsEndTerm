const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/newsdb", {useNewUrlParser: true,useUnifiedTopology: true});

const newsSchema = new mongoose.Schema({
    title: String,
    date: Date,
    category: String,
    topic: String,
    description: String
});

const News = new mongoose.model("News", newsSchema);

/* const news = new News({
    title: "khovansky",
    date: "2021-06-09",
    category: "sci-fi"
});

const news1 = {

    title:"kek",
    category: "kek1",
}

News.insertMany([news,news1],function(err,foundItems){
    if(err){
        console.log(err);
    } else{
        foundItems.forEach(function(element){
            console.log(element.title);
        })
        console.log(foundItems);
    }
});
*/

// news.save()