import React, { useContext, useState } from 'react'
import Zoom from '@mui/material/Zoom';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import './Create.css'
import { UserContext } from '../../Context/UserContext/Usercontext';

const Create = (props) => {
    const { currentUser, userRelatedData, setUserRelatedData } = useContext(UserContext);




    const [isExpanded, setExpanded] = useState(false);

    const [note, setNote] = useState({
        title: "",
        content: ""
    })

    function handleChange(event) {
        const { name, value } = event.target;
        setNote(function (para) {
            return {
                ...para,
                [name]: value
            }
        })

    }

    function expand() {
        setExpanded(true);
    }

    function submitNote(event) {
        props.onAdd(note);
        event.preventDefault();
        console.log(note);
        
        // console.log(currentUser);
        // console.log(JSON.parse(currentUser).firstName);
        // setUserRelatedData((para) => {
        //     return [...para, JSON.parse(currentUser).firstName];
        // })
        // console.log(userRelatedData.includes(JSON.parse(currentUser).firstName));

        if (userRelatedData.includes(JSON.parse(currentUser).firstName)) {
            setUserRelatedData((para) => {
                return [...para, note];
            })
        } else {
            setUserRelatedData((para) => {
                return [[JSON.parse(currentUser).firstName],[ ...para,  note]];
            })
        }
        console.log(userRelatedData);
       




    }


    return (
        <div className='main-div'>
            <form className='form-div'>
                {isExpanded && <input
                    type="text"
                    value={note.title}
                    name="title"

                    onChange={handleChange}
                    placeholder='Title'
                    required
                    className='input-sec'
                />}


                <div className='text-sec'>
                    <textarea
                        onClick={expand}
                        className='textarea-sec'
                        type="text"
                        value={note.content}
                        onChange={handleChange}
                        name="content"

                        rows={isExpanded ? 3 : 1}
                        placeholder='Take a Note...'
                        required
                    />

                    <Zoom in={isExpanded} >
                        <Fab onClick={submitNote}>
                            <AddIcon />
                        </Fab>
                    </Zoom>
                </div>

            </form>

        </div>
    )
}

export default Create