import React from "react";

class Note extends React.Component {

  render() {
    return (
      <div className="note">
        <h4>Title</h4>
        <div>
          {/* RECEIVES PROPS FROM NOTES */}
          {this.props.myNote}
        </div>
        {/* SENDING DATA TO PARENT AS AN ARGUMENT TO A FUNCTION PASSED TO CHILD */}
        <button onClick={() => this.props.handleDeleteNote(this.props.myNote)}>Delete</button>
      </div>
    );
  }
}

export default Note;
