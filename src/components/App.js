import React from 'react';
import { TodoInput, TodoList } from 'components';

class App extends React.Component {
  state = {
    data: [],
  };

  addTodo = todo => {
    const { data } = this.state;
    let newData = [
      ...data,
      { id: data.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1, text: todo }
    ];

    this.setState({ data: newData });
  };

  render() {
    const { data } = this.state;
    const { addTodo } = this;

    return (
      <div>
        <TodoInput onAdd={addTodo} />
        <TodoList data={data} />
      </div>
    );
  }
}

export default App;