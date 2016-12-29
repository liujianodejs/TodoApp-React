/**
 * Created by liujia on 2016/12/24.
 */

import React, { Component,PropTypes } from 'react';

class TodoHeader extends Component {

    static get defaultProps() {
        return {
            name: '谢霆锋',
            todoCount: 0
        }
    }

    static propTyps = {
        name: PropTypes.string.isRequired,
        todoCount: PropTypes.number.isRequired
    }

    render() {

        const {
            name,
            todoCount
        } = this.props;

        return (
            <span>
                <h1>我的待办清单</h1>
                <h3>哈喽，{name}，你有{todoCount}项待办事项</h3>
            </span>
        )
    }
}

export default TodoHeader;