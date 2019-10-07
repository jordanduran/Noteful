import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Note from '../Note/Note'
import CircleButton from '../CircleButton/CircleButton'
import './NoteListMain.css'
import NotesContext from '../NotesContext';

class NoteListMain extends Component {

  static contextType = NotesContext
  render(){
    const {notes} = this.context;
    const folderId = parseInt(this.props.match.params.folderId, 10)
    const notesInFolder = notes.filter((note) => 
    {if(folderId){
     return  note.folder_id === folderId
    } else{
      return note
    }
  }
  );

    console.log(notesInFolder);
    return (

      !this.props.err ?

      <section className='NoteListMain'>
        <ul>
          {notesInFolder.map(note =>
            <li key={note.id}>
              <Note
                id={note.id}
                name={note.note_name}
                modified={note.date_modified}
                history={this.props.history}
                match={this.props.match}
              />
            </li>
          )}
        </ul>
        <div className='NoteListMain__button-container'>
          <CircleButton
            tag={Link}
            to='/add-note'
            type='button'
            className='NoteListMain__add-note-button'
          >
            <FontAwesomeIcon icon='plus' />
            <br />
            Note
          </CircleButton>
        </div>
      </section>

      :
      
      <h3>{this.props.error}</h3>
    )
  }
}

export default NoteListMain;