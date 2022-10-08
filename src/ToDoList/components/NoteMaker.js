import React,{useState} from 'react'
import "../css/NoteMaker.css"
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const NoteMaker = ({setNoteList,titleInput,setTitleInput,tagInput,setTagInput,messageInput,setMessageInput}) => {
    const [isTitleInputClicked,setIsTitleInputClicked]=useState(false)
   function handleNoteMakerInputChange(e){
    if (e.target.id==="title"){setTitleInput(e.target.value)}
    else if (e.target.id==="tag"){setTagInput(e.target.value)}
    else if (e.target.id==="message"){setMessageInput(e.target.value)}

   }
   
    function handleAddNoteClick(e){
        e.preventDefault();
        
       if(titleInput.length!==0||tagInput.length!==0||messageInput.length!==0)
        {setNoteList((prev)=>{
            return [...prev,{id:new Date().getTime(),title:titleInput,tag:tagInput,message:messageInput}]
        })
        setTitleInput("")
        setTagInput("")
        setMessageInput("")
        setIsTitleInputClicked(false)
    }
    else {
            toast("Kindly fill any one slots")
            return;
        }

    }


  return (
    <>
    <ToastContainer />
        <div id='note-maker'>
            <div className='note-maker'>
                <form className='note-maker-form'>
                    <input onClick={()=>{setIsTitleInputClicked(true)}} onChange={handleNoteMakerInputChange} type="text" name='title' id='title' placeholder='Title' value={titleInput} />
                    {isTitleInputClicked?<><input onChange={handleNoteMakerInputChange} type="text" name='tag' id='tag' placeholder='Tag' value={tagInput}/>
                    <textarea onChange={handleNoteMakerInputChange} name="message" id="message" rows="3" placeholder='Enter Your Message' value={messageInput} />
                    <button onClick={handleAddNoteClick} className='note-maker-button'>+</button></>:null}
                </form>
            </div>
        </div>
    </>
  )
}

export default NoteMaker