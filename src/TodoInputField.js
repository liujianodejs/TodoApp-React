/**
 * Created by liujia on 2016/12/24.
 */


import React, { Component,PropTypes } from 'react';

class TodoInputField extends Component {

    static get defaultProps() {
        return {
            type: 'text',
            style: {width: 200,height: 30},
            placeholder: '请输入待办内容...',
            onKeyDown: null,
            defaultValue: "",
            autoFocus: false,
            onBlur: null
        }

    }


    static propTypes = {
        type: PropTypes.string.isRequired,
        style: PropTypes.object.isRequired,
        placeholder: PropTypes.string.isRequired,
        onKeyDown: PropTypes.func.isRequired,
        defaultValue: PropTypes.string.isRequired,
        autoFocus: PropTypes.bool.isRequired
    }

    render() {

        return (
            <input
                {...this.props}
            />
        )
    }
}

export default TodoInputField;