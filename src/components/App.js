import React from 'react';
import { TodoInput, TodoList } from 'components';

class App extends React.Component {
  state = {
    data: [
      { id: 0, text: "Play" },
      { id: 1, text: "Love" },
    ],
  };

  render() {
    const { data } = this.state;

    return (
      <div>
        <TodoInput />
        <TodoList data={data} />
      </div>
    );
  }
}

export default App;