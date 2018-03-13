import React from 'react';

class TodoList extends React.Component {
  render() {
    const { data } = this.props;

    return (
      <ul>
        {data.map((todo, index) =>
          <li
            /** 아래 key 값의 차이는 무엇일까? */
            // key={index}
            key={todo.id}
          >
            {todo.text}
          </li>
        )}
      </ul>
    );
  }
}

export default TodoList;