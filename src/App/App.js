import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import NoteListNav from '../NoteListNav/NoteListNav'
import NotePageNav from '../NotePageNav/NotePageNav'
import NoteListMain from '../NoteListMain/NoteListMain'
import NotePageMain from '../NotePageMain/NotePageMain'
import NotesContext from '../NotesContext';
import AddFolder from '../AddFolder/AddFolder';
import AddNote from '../AddNote/AddNote';
import { findNote } from '../notes-helpers';
import HandleError from '../HandleError';
import './App.css'

class App extends Component {
  state = {
    notes: [],
    folders: []
  };

  getFolders() {
    fetch('https://afternoon-eyrie-12522.herokuapp.com/folders')
    .then(res => {
      if(!res.ok) {
        throw new Error('Opps! Something went wrong')
      }
      return res.json()
    })
    .then(resjson => this.setState({folders: resjson}))
    .catch(err => <NoteListMain error={err} />)
  }

  getNotes() {
    fetch('https://afternoon-eyrie-12522.herokuapp.com/notes')
    .then(res => {
      if(!res.ok) {
        throw new Error('Oops! Something went wrong')
      }
      return res.json()
    })
    .then(resjson => this.setState({notes: resjson}))
    .catch(err => <NoteListMain error={err} />)
  }

  deleteNote = noteId => {
    const newNotes = this.state.notes.filter((note) => note.id !== parseInt(noteId, 10));
    this.setState({notes: newNotes})
  }

  addFolder = (folder) => {
    this.setState({folders: [...this.state.folders, folder]})
  }

  addNote = (note) => {

    if(!note.note_name || !note.content) {
      throw new Error('You need to enter a name and message!')
    }
    this.setState({notes: [...this.state.notes, note]})
    window.history.back()
  }

  componentDidMount() {
    //fetch 1)folders and 2) notes
    this.getFolders()
    this.getNotes()
  }

  renderNavRoutes() {
    return (
      <HandleError>
      <>
        {['/Noteful/', '/Noteful/folder/:folderId'].map(path =>
        
          <Route
            exact
            key={path}
            path={path}
            component={NoteListNav}
          />
          
        )}
        <Route
          path='/Noteful/note/:noteId'
          component={NotePageNav}
        />
        <Route
          path='/Noteful/add-folder'
          component={AddFolder}
        />
        <Route
          path='/Noteful/add-note'
          component={AddNote}
        />
        
      </>
        </HandleError>
      
    )
  }

  renderMainRoutes() {
    const { notes } = this.state
    return (
      <HandleError>
      <>
        {['/Noteful/', '/Noteful/folder/:folderId'].map(path =>
          <Route
            exact
            key={path}
            path={path}
            component={NoteListMain}
          />
        )}
        <Route
          path='/Noteful/note/:noteId'
          render={routeProps => {
            const noteId = parseInt(routeProps.match.params.noteId, 10)
            const note = findNote(notes, noteId)
            return (
              <NotePageMain
                {...routeProps}
                note={note}
              />
            )
          }}
        />
        <Route
          path='/Noteful/add-folder'       
        />
        <Route
          path='/Noteful/add-note'
        />
      </>
      </HandleError>
    )
  }

  render() {

    const contextValue = {
      folders: this.state.folders,
      notes: this.state.notes,
      deleteNote: this.deleteNote,
      addFolder: this.addFolder,
      addNote: this.addNote
    }

    return (
      <HandleError>
      <NotesContext.Provider value={contextValue}>
        <div className='App'>
          <nav className='App__nav'>
            {this.renderNavRoutes()}
          </nav>
          <header className='App__header'>
            <h1>
              <Link to='/Noteful/'>Noteful</Link>
              {' '}
              <FontAwesomeIcon icon='check-double' />
            </h1>
          </header>
          <main className='App__main'>
            {this.renderMainRoutes()}
          </main>
        </div>
      </NotesContext.Provider>
      </HandleError>
    )
  }
}

export default App