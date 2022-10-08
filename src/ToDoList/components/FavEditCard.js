import React from 'react'

const FavEditCard = ({
    setFavNoteList,
    favNoteList,
    favEditId,
    favtitleEditInput,
    setFavTitleEditInput,
    favtagEditInput,
    setFavTagEditInput,
    favmessageEditInput,
    setFavMessageEditInput}) => {
 
    function handleFavEditCardInputChange(e){
        if (e.target.id==="edit-title"){setFavTitleEditInput(e.target.value)}
    else if (e.target.id==="edit-tag"){setFavTagEditInput(e.target.value)}
    else if (e.target.id==="edit-message"){setFavMessageEditInput(e.target.value)}
    }

    function handleEditNoteClick(id){
        console.log("favedit id is "+id)
        setFavNoteList(favNoteList.map((item)=>{
            if(item.id===id){
                return ({...item,title:favtitleEditInput,tag:favtagEditInput,message:favmessageEditInput})
            }
            else {return item} 
        }))
    }
    return (

    <>
        <div class="modal fade" id="exampleModall" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div className='note-maker'>
                <form className='edit-note-cardd'>
                    <input onChange={handleFavEditCardInputChange} type="text" name='title' id='edit-title' placeholder='Title' value={favtitleEditInput} />
                    <input onChange={handleFavEditCardInputChange} type="text" name='tag' id='edit-tag' placeholder='Tag' value={favtagEditInput}/>
                    <textarea onChange={handleFavEditCardInputChange} name="message" id="edit-message" rows="3" placeholder='Enter Your Message' value={favmessageEditInput} />
                    
                </form>
            </div>
      </div>
      <div class="modal-footer">
        <button onClick={()=>handleEditNoteClick(favEditId)} type="button" class="btn btn-primary" data-bs-dismiss="modal">Edit</button>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default FavEditCard