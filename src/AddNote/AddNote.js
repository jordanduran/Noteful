import React, { Component } from 'react';
import ValiationError from '../AddFolder/ValidationError';
import NotesContext from '../NotesContext';

export default class AddNote extends Component {
  constructor(props) {
    super(props)
    this.state = {   
      name: '',
      noteValid: false,
      validMessage: ''
    }
  }
  
  static contextType = NotesContext;

  updateNote(name) {
    this.setState( {name: name}, () => {this.validateNote(name)} )
  }

  validateNote(inputValue) {
    let errorMsg = this.state.validMessage;
    let hasError = false;

    inputValue = inputValue.trim();
    if (inputValue.length === 0) {
      errorMsg = 'Note is required';
      hasError = true;

    } else if (inputValue.length < 3) {
      errorMsg = 'Note must be at least 3 characters';
      hasError = true;

    } else {
      errorMsg = '';
      hasError = false;
    }

    this.setState({
      validMessage: errorMsg,
      noteValid: !hasError
    })

  }

  addNoteRequest(name, addNote) {
    fetch(`http://localhost:9090/notes`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({name: name, modified: new Date()})
    })
    .then(res => {
      if (!res.ok) {
        throw new Error('Unable to add note to database')
      }
      return res.json();
    })
    .then(res => {
      addNote(res);
      this.props.history.push("/");
    })
    .catch(err => console.log(name, err))
  }

  render() {
    console.log(this.props)

    const { addNote } = this.context

    this.handleSubmit = (event) => {
      event.preventDefault();
      console.log(addNote)
      this.addNoteRequest(this.state.name, addNote);
    }

    return (
      <form onSubmit={ (e) => this.handleSubmit(e) }>
        <label>Add Note: 
          <input onChange={ (e) => this.updateNote(e.target.value) } type="text" name="addNote" id="addNote"></input>
        </label>
        <ValiationError hasError={!this.state.noteValid} message={this.state.validMessage}/>
        <button type="submit" disabled={!this.state.noteValid}>Submit</button>
      </form>
    )
  }

}