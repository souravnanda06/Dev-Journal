import mongoose from "mongoose";


const Connectdb = async () => {
    if (!process.env.MONGODB_URI) {
        console.error("MONGODB_URI environment variable is not set. Please configure it in your .env file.");
        process.exit(1);
    }
    try{
      await  mongoose.connect(process.env.MONGODB_URI);
       console.log("Mongodb Is Connected")
    }
    catch(err){
       console.error(err.message);
    }
    
}

export default Connectdb;