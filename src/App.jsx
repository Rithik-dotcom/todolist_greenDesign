//Parent FILE
import { useState } from 'react';
import './App.css';
import Create from './Components/CreateArea/Create';
import Note from './Components/Notes/Note';

function App() {
  const [notes, setNotes] = useState([])
  function addNote(newNote) {
    setNotes(para => {
      return [...para, newNote]
    })
    console.log(notes)
  }

  function handleDelete(id) {
    setNotes(para => {
      return para.filter((each, index) => {
        return index !== id;
      })
    })

  }

  return (
    <div className="App">

      <Create onAdd={addNote} />
      <div className='create-main-div'>
      <div className='container  row'>

        {notes.map((eachItem, index) => {
          return (
            < Note
        className="note-main"
              id={index}
              key={index}
              onDelete={handleDelete}
              title={eachItem.title}
              content={eachItem.content}
            />
          )
        })}
    
      </div>
      </div>
    </div>
  );
}

export default App;
