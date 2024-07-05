const mongoose =require ("mongoose");

const connectDB=async()={
    try {
        await mongoose.connect(mongoose.url)
        console.log("DB connected")
    } catch (error) {
        console.log("mongoose did not connect ${error}")
    }
}
module.exports=connectDB;
