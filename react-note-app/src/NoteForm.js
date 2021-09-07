import React, {useRef, useState} from "react";
import dateFormat from 'dateformat';
import {Redirect} from "react-router-dom";



export default function NoteForm(props) {

    const title = useRef(null)
    const description = useRef(null);
    const [redirect, setRedirect] = useState();
    const isEdit = props.isEdit;

    const renderFormTitle = () => isEdit ? <span>Edit Note</span> : <span>Add Note</span>

    const renderFormButtons = () => isEdit ?
        (<>
            <button type='submit' className="btn btn-primary float-right">Save Note</button>
            <button onClick={props.deleteNote} className='btn btn-danger float-end'>Delete Note</button>
        </>) :
        (<button type='submit' className="btn btn-primary float-right">Save Note</button>);


    function saveNote(e) {
        e.preventDefault();
        const note = {
            id: '',
            title: title.current.value,
            description: description.current.value,
            date: dateFormat(new Date(), 'mmm dd, yyyy'),
            time: dateFormat(new Date(), 'HH:MM')
        }
        setRedirect(<Redirect to='/'/>);
        props.saveNote(note);
    }


    return (
        <div className="card">
            <div className="card-header">
                {renderFormTitle()}
            </div>
            <div className="card-body">
                <form onSubmit={saveNote}>
                    <div className="form-group">
                        <p><input defaultValue={props.currNote !== undefined ? props.currNote.title : ''} ref={title} className='form-control'/></p>
                        <p><textarea defaultValue={props.currNote !== undefined ? props.currNote.description : ''} ref={description} rows='10'
                                     className='form-control'/></p>
                    </div>
                    {renderFormButtons()}
                    {redirect}
                </form>
            </div>
        </div>
    );
}