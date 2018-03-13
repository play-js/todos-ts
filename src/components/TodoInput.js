import React from 'react';

class TodoInput extends React.Component {
  state = {
    input: "",
  };

  handleClick = () => {
    console.log(this.state.input);
  }

  handleChange = event => {
    this.setState({ input: event.target.value });
  }

  render () {
    const { input } = this.state;
    const { handleClick, handleChange } = this;

    return (
      <React.Fragment>
        <input 
          value={input}
          onChange={handleChange}
        />
        <button onClick={handleClick}>
          +
        </button>
      </React.Fragment>
    );
  }
}

export default TodoInput;