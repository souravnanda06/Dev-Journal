import Journal from "../db/Create-entry.js";

export const deleteController = async (req,res) => {
    const Journalid = req.params.id;
    const user_id = req.user.id

    const journalExist = await Journal.findById(Journalid);
    if(!journalExist){
        res.status(404).json({
            message:"Journal Not Exist"
        })
    }
    if(journalExist.user_id.toString() != user_id){
        res.status(404).json({
            message:"not allowed"
        })
    }else{
        await Journal.findByIdAndDelete(Journalid);
    }
   
  res.status(200).json({
    message:"Journal Deleted"
  })
   
   

}