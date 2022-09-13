import React from 'react'
import "./Notes.css"
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
const NotesEl = ({ note, delteNote, updateNoteEl }) => {

    const truncate = (input, words, limit) =>
        input?.length > words ? `${input.substring(0, limit)}...` : input;

    return (

        <>
            <div className="col-lg-6 col-md-6">
                <div className="card my-3">
                    <div className="card-body">
                        <div className='note-btn'>
                            <div className="card-title ">{truncate(note.title, 17, 17)}</div>
                            <div className="edit-del-icon"> 
                            <CreateIcon className="mx-3 edit-icon" onClick={() => updateNoteEl(note)}/>
                            <DeleteIcon className='del-icon' onClick={() => delteNote(note._id)}/>
                            </div>
                        </div>
                        <div className="grey-line">

                        </div>
                        <div className="card-text my-3">
                            <p>
                                {note.description}
                            </p>
                        </div>
                        {/* <div className='action-btn'>
                            <button id='edit-note' onClick={() => updateNoteEl(note)}>Edit</button>
                            <button id='del-note' onClick={() => delteNote(note._id)}>Delete</button>

                        </div> */}
                    </div>
                </div>
            </div>


        </>


    )
}

export default NotesEl