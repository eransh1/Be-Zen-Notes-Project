import React from 'react'
import "../css/NoteCard.css"



const NoteCard = ({handlePinIconClick,item,id,handleNOteDelBtnClick,setEditId,setTitleEditInput,setTagEditInput,setMessageEditInput}) => {
 
 function handleNoteEditBtnClick(id,item){
    
    setEditId(id)
    setTitleEditInput(item.title)
    setTagEditInput(item.tag)
    setMessageEditInput(item.message)
 }   

  return (
    <><div className='col-12 col-md-6 col-lg-3 noteee-carddd'>
        <div id='note-card'>
            <div className='note-card'>
            <div onClick={()=>handlePinIconClick(id)} className='pin-icon ms-auto'><i class="fa-solid fa-thumbtack pin"></i></div>
                <p className='note-card-title'>{item.title}</p>
                <p className='note-card-tag'>{item.tag}</p>
                <p className='note-card-message'>{item.message} </p>
                
                <div className='note-card-buttons'>
                    <button onClick={()=>handleNoteEditBtnClick(id,item)} className='edit-button ms-auto' data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fa-solid fa-pen-to-square"></i></button>
                    <button onClick={()=>handleNOteDelBtnClick(id)} className='del-button'><i class="fa-solid fa-trash"></i></button>
                </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default NoteCard