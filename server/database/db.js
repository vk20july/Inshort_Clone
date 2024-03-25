import mongoose from "mongoose";


const Connection=async(username,password)=>{
    const URL=`mongodb+srv://${username}:${password}@clone-inshorts.ic06hnd.mongodb.net/`;
    try{
        await mongoose.connect(URL,{useNewUrlParser: true});
        console.log('Database connected succesfully')
    }catch (error){
        console.log('Error while connecting with the databse',error);
    }
}

export default Connection;