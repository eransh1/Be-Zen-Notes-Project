import React, { useEffect, useState } from 'react'
import "../css/Home.css"
import Navbar from './Navbar'
import NoteMaker from './NoteMaker'
import NoteCard from './NoteCard'
import EditCard from './EditCard'
import ReactPaginate from "react-paginate"
import FavNoteCard from "./FavNoteCard"
import FavEditCard from "./FavEditCard"

const getFavNoteListFromLocalStorage=()=>{
 const favItemsss= localStorage.getItem("favNoteList")
 if(favItemsss){return JSON.parse(favItemsss)}
 else {return ([])}
} 
const getNoteListFromLocalStorage=()=>{
  const noteItemsss=localStorage.getItem("NoteList")
  if(noteItemsss){return JSON.parse(noteItemsss)}
  else {return ([])}
}

const Home = () => {
// NOTE MAKER DATA
const[titleInput,setTitleInput]=useState("")
const[tagInput,setTagInput]=useState("")
const[messageInput,setMessageInput]=useState("")
const[titleEditInput,setTitleEditInput]=useState("")
const[tagEditInput,setTagEditInput]=useState("")
const[messageEditInput,setMessageEditInput]=useState("")
const[noteList,setNoteList]=useState(getNoteListFromLocalStorage())
const [favNoteList,setFavNoteList]=useState(getFavNoteListFromLocalStorage())
const[editId,setEditId]=useState()
const[favEditId,setFavEditID]=useState()
const[favtitleEditInput,setFavTitleEditInput]=useState("")
const[favtagEditInput,setFavTagEditInput]=useState("")
const[favmessageEditInput,setFavMessageEditInput]=useState("")
const[isFavNoteList,setIsFavNoteList]=useState(false)
const[isNoteList,setIsNoteList]=useState(false)
const [searchInput,setSearchInput]=useState("")

// LOCAL STORAGe
useEffect(()=>{
  localStorage.setItem("favNoteList",JSON.stringify(favNoteList))
  if(favNoteList.length===0){setIsFavNoteList(false)}
  else if(favNoteList.length!==0){setIsFavNoteList(true)}
  },[favNoteList])
  
  useEffect(()=>{
    localStorage.setItem("NoteList",JSON.stringify(noteList))
    if(noteList.length===0){setIsNoteList(false)}
  else if(noteList.length!==0){setIsNoteList(true)}
  },[noteList])
  

//Pagination
const[pageNumber,setPageNumber]=useState(0)
const notesPerPage=6;
const pagesVisited=pageNumber*notesPerPage
const displayNotes=noteList.filter((item)=>{
  if(searchInput===""){return item}
  else if (searchInput.toLowerCase().includes(item.tag.toLowerCase())){return item}
}).slice(pagesVisited,pagesVisited+notesPerPage)
const pageCount=Math.ceil(noteList.length/notesPerPage)
const changePage=({selected})=>{
  setPageNumber(selected)
  }

//Funtions

function handleNOteDelBtnClick(id){
 const newNOteList=noteList.filter((event)=>{
  return event.id!==id;
 })
 setNoteList(newNOteList)
 
}

function handlePinIconClick(id){

  const newFavNOteList=noteList.filter((prev)=>{
    return prev.id===id
  })
  const ultraNewNoteList=noteList.filter((prev)=>{
    return prev.id!==id
  })
  if(favNoteList.includes(...newFavNOteList)){return;}
  else {setFavNoteList((prev)=>{
    return [...prev,...newFavNOteList]
  })
setNoteList(ultraNewNoteList)
}
}
function handleFavNotesDelClick(id){

  const ultraNewFavNoteList=favNoteList.filter((item)=>{
    return item.id!==id;
  })
  setFavNoteList(ultraNewFavNoteList)
}

  return (
    <>
    <FavEditCard setFavNoteList={setFavNoteList} favNoteList={favNoteList} favEditId={favEditId} favtitleEditInput={favtitleEditInput} setFavTitleEditInput={setFavTitleEditInput} favtagEditInput={favtagEditInput} setFavTagEditInput={setFavTagEditInput} favmessageEditInput={favmessageEditInput} setFavMessageEditInput={setFavMessageEditInput} />
    <EditCard noteList={noteList} editId={editId} setNoteList={setNoteList} titleEditInput={titleEditInput} setTitleEditInput={setTitleEditInput} tagEditInput={tagEditInput} setTagEditInput={setTagEditInput} messageEditInput={messageEditInput} setMessageEditInput={setMessageEditInput}/>
    <Navbar searchInput={searchInput} setSearchInput={setSearchInput} />
    <NoteMaker noteList={noteList} setNoteList={setNoteList} titleInput={titleInput} tagInput={tagInput} messageInput={messageInput} setTitleInput={setTitleInput} setTagInput={setTagInput} setMessageInput={setMessageInput} />

    {noteList.length===0&&favNoteList.length===0?<div className='faltu-brand'>
      <div className='brand-and-text'>
      <i className="fa-solid fa-crown crown-icon"></i>
        <p className='faltu-brand-text'>Notes you add appear here</p>
      </div>
    </div>:null}

   {isFavNoteList?<div style={{marginLeft:"2rem",marginTop:"2rem"}}> <h1>Pinned Notes</h1></div>:null}
    <div style={{paddingLeft:"1rem"}} className='row' id='fav-note-card-cont'>
    {favNoteList.filter((item)=>{
      if(searchInput===""){return item}
      else if (searchInput.toLowerCase().includes(item.tag.toLowerCase())){return item}
    }).map((item)=>{
  return <FavNoteCard setFavMessageEditInput={setFavMessageEditInput} setFavTagEditInput={setFavTagEditInput} setFavTitleEditInput={setFavTitleEditInput} setFavEditID={setFavEditID} favNoteList={favNoteList} setNoteList={setNoteList} setFavNoteList={setFavNoteList} handleFavNotesDelClick={handleFavNotesDelClick} item={item} id={item.id} key={item.id} />
})}</div>

{isFavNoteList&&isNoteList?<div style={{marginLeft:"2rem"}}> <h1>Unpinned Notes</h1></div>:null}
<div className='row'>
   {displayNotes.map((item)=>{
    return <NoteCard handlePinIconClick={handlePinIconClick} setMessageEditInput={setMessageEditInput} setTagEditInput={setTagEditInput} setTitleEditInput={setTitleEditInput} setEditId={setEditId} handleNOteDelBtnClick={handleNOteDelBtnClick} item={item} id={item.id} key={item.id} /> 
   })}</div>

{/* PAGINATION NAVBAR */}
{noteList.length<=6?null:
<ReactPaginate 
  previousLabel={"Prev"}
  nextLabel={"Next"}
  pageCount={pageCount}
  onPageChange={changePage}
  containerClassName={"pagination-btn"}
  previousLinkClassName={"prev-btn"}
  nextLinkClassName={"next-btn"}
  disabledClassName={"disable-btn"}
  activeClassName={"pagination-active"}
/>}

    </>
  )
}

export default Home