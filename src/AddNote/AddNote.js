import React, {Component} from 'react'
// import { format } from 'date-fns'
import NotesContext from '../NotesContext';

export default class AddNote extends Component {
  constructor(props) {
    super(props)
    this.state ={
      noteName: '',
      noteContent: '',
      folder: '',
      folderId: '',
      validNoteMessage: '',
      validNoteName: false,
      validContentMessage: '',
      validContent: false,
      validFolderMessage: '',
      validFolder: false,
      datetime: new Date()
    }
  }

  static contextType = NotesContext;

  updateNoteName(name){
    this.setState({noteName: name}, () => {this.validateNoteName(name)})
  }
  
  updateNoteContent(content){
    this.setState({noteContent: content}, () => {this.validateNoteContent(content)})
  }

  updateFolder(name){
    this.setState({folder: name}, () => {this.validateFolder(name)})
  }

  validateFolder(name){
    let errorMsg = this.state.validFolderMessage;
    let hasError = false;
  
    if(this.context.folders.find((folder) => folder.title === name) === undefined){
      errorMsg = 'Please select a valid folder'
      hasError = true;
    } else {
      errorMsg = '';
      hasError = false;
    }
      this.setState({
        validFolderMessage: errorMsg,
        validFolder: !hasError
    })
  }

  validateNoteName(name){
    let errorMsg = this.state.validNoteMessage;
    let hasError = false;
    name = name.trim();
    if(name.length < 3){
      errorMsg = 'Please enter a note name at least 3 characters long';
      hasError = true;
    } else {
      errorMsg = '';
      hasError = false;
    }
    this.setState({
      validMessage: errorMsg, 
      validNoteName: !hasError
    })
  }

  validateNoteContent(content){
    let errorMsg = this.state.validContentMessage;
    let hasError = false;
    content = content.trim();
    if(content.length < 3){
      errorMsg = 'Please enter content that is at least 3 characters long';
      hasError = true;
    } else {
      errorMsg = '';
      hasError = false;
    }
    this.setState({
      validContentMessage: errorMsg,
      valdContent: !hasError
    })
  }

  addNoteRequest(name, content, folderId, date, addNote){
    fetch('https://afternoon-eyrie-12522.herokuapp.com/notes', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({note_name: name, content: content, date_modified: date, folder_id: folderId})
    })
    .then(res => {
      if (!res.ok) {
        throw new Error('Couldn\'t add note. Sorry!')
      }
      return res.json();
    })
    .then(res => addNote(res))
    .catch(err => console.log(err))
  }

  render(){

    this.handleSubmit= (event) => {
    event.preventDefault();

    if (!this.state.folder){
      this.addNoteRequest(this.state.noteName, this.state.noteContent, this.context.folders[0].id, new Date(), addNote)
    } else {
      this.addNoteRequest(this.state.noteName, this.state.noteContent, this.context.folders.find((folder) => folder.title === this.state.folder).id
    , new Date(), addNote)
    }
  }

    const { addNote } = this.context

    const filteredFolders = this.context.folders.map(folder => {
      return (
        <option key={folder.id} value={folder.title}>{folder.title}</option>
      )
    })
    return(
      <div>
        <form onSubmit= {(event) => this.handleSubmit(event)}>
          <label > Note Name
            <input placeholder = "Note name" required onChange = {(e) => this.updateNoteName(e.target.value)}></input>
          </label>
          <label> Note content
            <input placeholder = "Note content" required onChange = {(e) => this.updateNoteContent(e.target.value)}></input>
          </label>
          <label> Folder Name
            <select placeholder = "Folder name" onChange = {(e) => 
            this.updateFolder(e.target.value)}>
            {filteredFolders}
            </select>
          </label>
          <button type="submit">Submit</button>
        </form>
        {!this.state.validNoteName ? <p>{this.state.validNoteMessage}</p> : <></>}
        {!this.state.validContent ? <p>{this.state.validContentMessage}</p>: <></>}
        {!this.state.validFolder ? <p>{this.state.validFolderMessage}</p> : <> </>}
        <h3>{this.props.error}</h3>
      </div>
      
    ) 
  }
}