

function JournalCard({_id,title,description,date,onDelete,onUpdate}){
    return<>
    <div className="journal-container">
        <div className="journal-card">
            <h2>Journal</h2>
            <label>id:</label>
            <p>{_id}</p>
            <label>title:</label>
            <p>{title}</p>
            <label>description:</label>
            <p>{description}</p>
            <label>Created At:</label>
            <p>{date}</p>
            <button 
            onClick={()=>{
                onDelete(_id);
            }}
            >Delete</button>
            <button
          onClick={()=>{
            onUpdate(_id)
          }}
            >
                Edit
            </button>

        </div>
    </div>
    
    </>
}
export default JournalCard;