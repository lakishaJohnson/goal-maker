import React from "react";
import Note from "./Note";

class Notes extends React.Component {
  constructor() {
    super();
    
    // ALL CHANGING STATES LIVE IN APP.JS
    this.state = {
      noteInput: "",
      notes: [],
    };
  }

  // THIS METHOD IS RESPONSIBLE FOR ANY USER INPUT
  handleNoteInput = (event) => {
    this.setState({
      noteInput: event.target.value,
    });
    //  TO CHECK IF IT WORKS
    console.log(this.state.noteInput);
  };
  
  // THIS METHOD IS RESPONSIBLE FOR WHEN NOTES BUTTON IS CLICKED
  handleAddNote = () => {
    this.setState({
      notes: [...this.state.notes, this.state.noteInput],
      noteInput: ""
    });
  };

  handleDeleteNote = (noteToDelete) => {
    let filteredNotes = this.state.notes.filter((note) => {
      return note !== noteToDelete
    })
    this.setState({
      notes: filteredNotes,
    })

  }

  render() {
    // LOOPS THRU ARRAY OF NOTES TO RETURN EACH ONE SEPARATELY. i IS NEEDED FOR MAP
    let notesToDisplay = this.state.notes.map((note, i) => {
      return <Note key={i} myNote={note} handleDeleteNote={this.handleDeleteNote}/>;
      // PASSING DOWN PROPS TO NOTE COMPONENT: note={note}
    });

    return (
      <div className="notes">
        <h2>Notes</h2>
        <textarea 
        value={this.state.noteInput} onChange={this.handleNoteInput} />
        <button onClick={this.handleAddNote}>Add note</button>
        <div className="note-container">{notesToDisplay}</div>
      </div>
    );
    // oNcHANGE AND oNcLICK ARE PROPERTIES W/A VALUE THAT IS POINTING TO A METHOD
  }
}

export default Notes;
