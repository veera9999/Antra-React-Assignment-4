import React, { Component } from "react";

class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
    };
  }

  handleInputChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.inputValue.trim()) {
      this.props.addNewTask(this.state.inputValue);
      this.setState({ inputValue: "" });
    }
  };

  render() {
    return (
      <div className="form-container">
        <form id="search-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
            id="add-task-bar"
            placeholder="Add Task"
            className="form-item"
          />
          <button id="add-task-btn" className="form-item" type="submit">
            Add Task
          </button>
        </form>
      </div>
    );
  }
}

export default TaskForm;

// import React, { useState } from "react";

// export default function TaskForm({ addNewTask }) {
//   const [inputValue, setInputValue] = useState("");

//   const handleInputChange = (e) => {
//     setInputValue(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (inputValue.trim()) {
//       addNewTask(inputValue);
//       setInputValue("");
//     }
//   };

//   return (
//     <div className="form-container">
//       <form id="search-form" onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={inputValue}
//           onChange={handleInputChange}
//           id="add-task-bar"
//           placeholder="Add Task"
//           className="form-item"
//         />
//         <button id="add-task-btn" className="form-item" type="submit">
//           Add Task
//         </button>
//       </form>
//     </div>
//   );
// }
