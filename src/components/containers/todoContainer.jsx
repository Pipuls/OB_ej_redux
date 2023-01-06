import React from 'react'
import { connect } from 'react-redux'

//acciones
import { toggleTodo } from '../../store/actions/actions'

import TodoList from '../pure/TodoList'

//filtrar todo list
const filterTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_ACTIVE':
            return todos.filter((todo) => !todo.completed);
        case 'SHOW_COMPLETED':
            return todos.filter((todo) => todo.completed);

        default:
            return todos;
    }
}

const mapStateToProps = (state) => {
    return {
        todos: filterTodos(state.todosState, state.filterState)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        ontTodoClick: (id) => {
            dispatch(toggleTodo(id))
        }
    }
}

//conectamos state y dispatch a las props de todolist
const TodosContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList)

export default TodosContainer