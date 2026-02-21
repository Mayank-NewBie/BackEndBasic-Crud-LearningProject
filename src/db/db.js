const mongoose=require('mongoose')



async function connectDB(){
  await mongoose.connect("mongodb+srv://Practice-backend-1:dzo6pVVmhI7aNiw3@practice-backend-mongod.tdkrqrf.mongodb.net/sampleDb")

  console.log("Connect To DB")
}

module.exports=connectDB