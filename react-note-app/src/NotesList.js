import React from "react";
import {NavLink} from "react-router-dom";

export default function NotesList(props) {

    const notes = props.notes;

    const getListItems = () => {
        return notes.map(note =>
            <NavLink
                key={ note.id.toString() }
                className='list-group-item list-group-item-light'
                to={ `/note/${note.id}` }
                id={note.id}
                onClick={(e) => props.noteListCurrent(e)}
                >
                <div className='text-truncate h6 '>{ note.title }</div>
                <div className='font-weight-light fst-italic small'>{ note.date }</div>
            </NavLink>
        )
    }


    return (
        <ul className="list-group">
            {!notes.length ? <span >There are no notes</span> : getListItems()}
        </ul>
    );
}