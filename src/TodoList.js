/**
 * Created by yuechunli on 2016/12/24.
 */
import React, { Component,PropTypes } from 'react';

import TodoItem from './TodoItem';

class TodoList extends Component {

    static get defaultProps(){
        return {
            todos: [],
            toggleItemFunc: null,
            deleteItemFunc: null,
            editeItemFunc: null
        }
    }

    static propTypes = {
        todos: PropTypes.arrayOf(PropTypes.object).isRequired,
        toggleItemFunc: PropTypes.func.isRequired,
        deleteItemFunc: PropTypes.func.isRequired,
        editeItemFunc: PropTypes.func.isRequired
    }


    render() {
        return (
            <ul>
                {
                    this.props.todos.map((todo) => {

                        return (
                            <li key={todo.id}>
                                <TodoItem
                                    type="checkbox"
                                    checked={todo.checked}
                                    title={todo.title}
                                    toggleItem={() => {
                                        this.props.toggleItemFunc(todo.id);
                                    }}
                                    deleteItem={() => {
                                        this.props.deleteItemFunc(todo.id);
                                    }}
                                    editeItem={(title) => {
                                        this.props.editeItemFunc(title,todo.id);
                                    }}
                                />

                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}

export default TodoList;