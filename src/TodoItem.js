/**
 * Created by liujia on 2016/12/24.
 */

import React, { Component,PropTypes } from 'react';
import TodoInputField from './TodoInputField';


class TodoItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            editable: false
        };
    }


    static get defaultProps() {
        return {
            type: 'checkbox',
            checked: false,
            title: 'item',
            toggleItem: null,
            deleteItem: null,
            editeItem: null
        }
    }

    static propTypes = {
        type: PropTypes.string.isRequired,
        checked: PropTypes.bool.isRequired,
        title: PropTypes.string.isRequired,
        toggleItem: PropTypes.func.isRequired,
        deleteItem: PropTypes.func.isRequired,
        editeItem: PropTypes.func.isRequired
    }


    changeEditaleValue(){
        this.setState({
            editable: !this.state.editable
        });
    }


    renderViewMode() {
        const {
            type,
            checked,
            title,
            toggleItem,
            deleteItem
        } = this.props;

        return (
            <span>
                <input type={type} checked={checked} onChange={() => toggleItem()}/>
                <span onDoubleClick={() => this.changeEditaleValue()}>{title}</span>
                <button onClick={() => {
                    deleteItem();
                }}>x</button>
            </span>
        )
    }


    renderEditMode() {
        const {
            type,
            checked,
            title,
            toggleItem,
            deleteItem,
            editeItem
        } = this.props;

        return (
            <span>
                <input type={type} checked={checked} onChange={() => toggleItem()}/>
                <TodoInputField
                    autoFocus={true}
                    type="text"
                    defaultValue={title}
                    style={{width: 200,height: 15}}
                    onKeyDown={(e) => {

                        if (e.keyCode === 13) {
                            editeItem(e.target.value);
                            this.changeEditaleValue();
                        }
                    }}
                    onBlur={() => this.changeEditaleValue()}
                />
                <button onClick={() => {
                    deleteItem();
                }}>x</button>
            </span>
        )
    }

    render() {

        return this.state.editable ? this.renderEditMode():this.renderViewMode();
    }
}

export default TodoItem;