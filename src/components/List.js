import React from "react";

class List extends React.Component {
  render() {
    return (
      <div className="list">
        <h4>List Name</h4>
        <input type="text" />
        <button className="small-button">Add item</button>
        <ul>
          <li>Item</li>
          <li>Item</li>
          <li>Item</li>
          <li>Item</li>
          <li>Item</li>
        </ul>
      </div>
    );
  }
}

export default List;