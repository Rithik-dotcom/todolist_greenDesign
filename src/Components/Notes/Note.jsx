import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import './Notes.css'
const Note = (props) => {
    function handleClick(){
        props.onDelete(props.id)
    }
  return (
    <div className='note-div col pb-2 '>
        <h1 id='h1'>{props.title}</h1>
        <p>{props.content}</p>
        <button className='btn btn-primary ' onClick={handleClick} ><DeleteIcon/></button>

    </div>
  )
}

export default Note