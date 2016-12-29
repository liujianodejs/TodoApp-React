/**
 * Created by yuechunli on 2016/12/24.
 */

import React, { Component } from 'react';
import TodoHeader from './TodoHeader';
import TodoInputField from './TodoInputField';
import TodoList from './TodoList';

let _toggleItemFunc = (todos,id) => {

    let target = todos.find((todo) => todo.id === id);
    target.checked = !target.checked;
    return todos;
}

let _deleteItemFunc = (todos,id) => {

    let index = todos.findIndex((todo) => todo.id === id);

    todos.splice(index, 1);

    return todos;
}

let  _createItemFunc = (todos,title) => {

    let id = todos.length === 0 ? 101 : todos[todos.length-1].id + 1;

    todos.push({
        id,
        title,
        checked: false
    });

    return todos;
}


let _editeItemFunc = (todos,title,id) => {

    let target = todos.find((todo) => todo.id === id);
    target.title = title;
    return todos;
}

class TodoApp extends Component {

    constructor(props) {
        super(props);
        this.state = {
          todos: [
              {
                  id: 101,
                  title: 'item 1',
                  checked: false
              },
              {
                  id: 102,
                  title: 'item 2',
                  checked: true
              },
              {
                  id: 103,
                  title: 'item 3',
                  checked: false
              },
              {
                  id: 104,
                  title: 'item 4',
                  checked: false
              }
          ]
        };
    }



    render() {

        const {
            todos
        } = this.state;

        const todoCount = todos.filter((todo) => !todo.checked).length;

        return (
            <span>
                <TodoHeader name="王菲" todoCount={todoCount}/>
                <TodoInputField
                    type="text"
                    placeholder="请输入待办事项内容..."
                    style={{width: 200,height: 25}}
                    onKeyDown={(e) => {

                        if (e.keyCode === 13) {
                            this.setState({
                                todos: _createItemFunc(todos,e.target.value)
                            });
                            e.target.value = "";
                        }
                    }}
                />
                <TodoList
                    todos={todos}
                    toggleItemFunc={(id) => {
                        this.setState({
                            todos: _toggleItemFunc(todos,id)
                        });
                    }}
                    deleteItemFunc={(id) => {
                        this.setState({
                            todos: _deleteItemFunc(todos,id)
                        });
                    }}
                    editeItemFunc={(title,id) => {
                        this.setState({
                            todos: _editeItemFunc(todos,title,id)
                        });
                    }}
                />
            </span>
        )
    }
}
export default TodoApp;