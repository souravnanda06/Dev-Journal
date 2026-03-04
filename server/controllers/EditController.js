import Journal from "../db/Create-entry.js";

export const editJournal = async (req,res)=>{
    const User_id = req.user.id;
    
    const journalid = req.params.id;
    if(!journalid){
        res.status(400).json({
            message:"No Journal Found"
        })
    }

    const journal = await Journal.findOne({
        user_id:User_id,
        _id:journalid,

    });
    if(journal){
        res.status(200).json(journal);

    }
    if(!journal){
        res.status(400).json({message:"No Journal's"})
    }
    
    
}