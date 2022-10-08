import React from 'react'
import "../css/EditCard.css"

const EditCard = ({noteList,setNoteList,editId,titleEditInput,setTitleEditInput,tagEditInput,setTagEditInput,messageEditInput,setMessageEditInput}) => {

    function handleEditCardInputChange(e){
        if (e.target.id==="edit-title"){setTitleEditInput(e.target.value)}
    else if (e.target.id==="edit-tag"){setTagEditInput(e.target.value)}
    else if (e.target.id==="edit-message"){setMessageEditInput(e.target.value)}
    }
    function handleEditNoteClick(editID){
console.log("edit id is "+editID)
       setNoteList(noteList.map((item)=>{
        if(item.id===editID){return {...item,title:titleEditInput,tag:tagEditInput,message:messageEditInput}}
        else return item;
       }))


    }

    return (
   <>
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div className='note-maker'>
                <form className='edit-note-cardd'>
                    <input onChange={handleEditCardInputChange} type="text" name='title' id='edit-title' placeholder='Title' value={titleEditInput} />
                    <input onChange={handleEditCardInputChange} type="text" name='tag' id='edit-tag' placeholder='Tag' value={tagEditInput}/>
                    <textarea onChange={handleEditCardInputChange} name="message" id="edit-message" rows="3" placeholder='Enter Your Message' value={messageEditInput} />
                    
                </form>
            </div>
      </div>
      <div class="modal-footer">
        <button onClick={()=>handleEditNoteClick(editId)} type="button" class="btn btn-primary" data-bs-dismiss="modal">Edit</button>
      </div>
    </div>
  </div>
</div>
   </>
  )
}

export default EditCard