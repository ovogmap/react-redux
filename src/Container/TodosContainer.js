import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux"
import Todos from '../components/Todos'
import { addTodo, toggleTodo, removeTodo, updateTodo } from '../modules/todos'

export default () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const onCreate = text => dispatch(addTodo(text))
  const onToggle = useCallback(id => dispatch(toggleTodo(id)),[dispatch])
  const onRemove = id => dispatch(removeTodo(id))
  const onUpdate = (id, text) => dispatch(updateTodo(id, text))

  return <Todos todos={todos} onCreate={onCreate} onToggle={onToggle} onRemove={onRemove} onUpdate={onUpdate} />
}