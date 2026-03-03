import mongoose from "mongoose";


const Connectdb = async () => {
    try{
      await  mongoose.connect('mongodb+srv://nandasourav766_db_user:mMZ34N6Vg4zp1dM4@bolt.qnxepgx.mongodb.net/dev-journaldb');
       console.log("Mongodb Is Connected")
    }
    catch(err){
       console.error(err.message);
    }
    
}

export default Connectdb;