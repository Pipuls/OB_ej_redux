import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ onClickk, completed, text, id }) => {
    return (
        <li onClick={onClickk} 
        style={
            {
                textDecoration: completed ? 'line-through': 'none',
                textDecorationColor: completed ? 'green' : 'none',
                color: completed ? 'green' : 'white'  
            } 
        }>
            {id} - {text}
        </li>
    );
}

Todo.propTypes = {
    onClickk: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
}

export default Todo;

