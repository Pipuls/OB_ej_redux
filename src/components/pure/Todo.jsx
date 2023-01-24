import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ onClick, completed, text, id }) => {
    return (
        <li onClick={onClick} style={{
            textDecoration : completed ? 'line-through' : 'none',
            textDecorationColor : completed ? 'lime' : 'none',
            color : completed ? 'lime' : 'white',
            }}>
            {id +1} - {text}
        </li>
    );
}

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    id: PropTypes.any.isRequired
}

export default Todo;


