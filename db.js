const mongoose = require('mongoose');
const mongoURI="mongodb://mishrasatyam476:Satyam123@ac-9holiug-shard-00-00.rt0q0ze.mongodb.net:27017,ac-9holiug-shard-00-01.rt0q0ze.mongodb.net:27017,ac-9holiug-shard-00-02.rt0q0ze.mongodb.net:27017/goFoodmern?ssl=true&replicaSet=atlas-7rbgh4-shard-0&authSource=admin&retryWrites=true&w=majority"
 const mongoDB =async() =>{
   await  mongoose.connect(mongoURI,{useNewUrlParser: true}, async(err,result)=>{
        if(err) console.log("---",err)
        else{
         console.log("connected");
          const fetched_data = await mongoose.connection.db.collection("food_items");
         fetched_data.find({}).toArray(async function(err,data){
          const foodCategory =await mongoose.connection.db.collection("foodCategory");
          foodCategory.find({}).toArray(function (err, catData){
               if(err) console.log(err);
            else {
              global.food_items=data;
              global.foodCategory=catData;
            }
          })
          //  if(err) console.log(err);
          //   else {
          //     global.food_items=data;
          //   };
          })
        }
     });
 }

  module.exports = mongoDB;


