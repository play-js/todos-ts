import React from 'react';

class TodoInput extends React.Component {
  state = {
    input: "",
  };

  handleClick = () => {
    const { input } = this.state;

    if (input.trim() === "") {
      return;
    }

    this.props.onAdd(input);
    this.setState({ input: "" });
  }

  handleChange = event => {
    this.setState({ input: event.target.value });
  }

  handleKeyDown = event => {
    if (event.key === "Enter") {
      this.handleClick();
    }
  }

  render () {
    const { input } = this.state;
    const { handleClick, handleChange, handleKeyDown } = this;

    return (
      <React.Fragment>
        <input 
          value={input}
          onChange={handleChange}
          placeholder="Input here"
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleClick}>
          +
        </button>
      </React.Fragment>
    );
  }
}

export default TodoInput;