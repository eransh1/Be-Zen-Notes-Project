import React from 'react'
import "../css/FavNoteCard.css"

const FavNoteCard = ({item,id,handleFavNotesDelClick,favNoteList,setNoteList,setFavNoteList,setFavMessageEditInput,setFavTagEditInput,setFavTitleEditInput,setFavEditID}) => {
  
  function handleFavNoteCardPinClick(id){

    const newfavList=favNoteList.filter((item)=>{
      return item.id!==id;
    })
    const newNoteListItem=favNoteList.filter((item)=>{
      return item.id===id;
    })
    setFavNoteList(newfavList)
    setNoteList((prev)=>{
      return [...prev,...newNoteListItem]
    })
  }
  
function handleFavNoteEditBtnClick(id,item){
  console.log(item)
  setFavMessageEditInput(item.message)
  setFavTagEditInput(item.tag)
setFavTitleEditInput(item.title)
setFavEditID(id)
}

  return (
    <>
   
        <div className='note-card'>
        <div onClick={()=>handleFavNoteCardPinClick(id)} className='pin-iconn pinn ms-auto'><i style={{cursor:"pointer"}} className="fa-solid fa-thumbtack"></i></div>
                <p className='note-card-title'>{item.title}</p>
                <p className='note-card-tag'>{item.tag}</p>
                <p className='note-card-message'>{item.message} </p>
                
                <div className='note-card-buttons'>
                <button onClick={()=>handleFavNoteEditBtnClick(id,item)} className='edit-button ms-auto' data-bs-toggle="modal" data-bs-target="#exampleModall"><i class="fa-solid fa-pen-to-square"></i></button>
                <button onClick={()=>handleFavNotesDelClick(id)} className='del-button'><i class="fa-solid fa-trash"></i></button>
                </div>
            </div>
            
    </>
  )
}

export default FavNoteCard