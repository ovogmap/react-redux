import React, { useState } from "react";
import todos from "../modules/todos";

export default ({ todos, onCreate, onToggle, onRemove, onUpdate }) => {
  // 리덕스를 사용한다고 해서 모든 상태를 리덕스에서 관리해야하는 것은 아닙니다.
  const [text, setText] = useState('');
  const [utext, setUtext] = useState('');
  const [upDate, setUpDate] = useState(true)
  const onChange = e => setText(e.target.value);
  const onChange2 = e => setUtext(e.target.value);
  const onSubmit = e => {
    e.preventDefault(); // Submit 이벤트 발생했을 때 새로고침 방지
    onCreate(text);
    setText(''); // 인풋 초기화
  };
  const onTodoUpdate = () => {

  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={text}
          placeholder="할 일을 입력하세요.."
          onChange={onChange}
        />
        <button type="submit">등록</button>
      </form>
      <TodoList onUpdate={onUpdate} setUtext={setUtext} todos={todos} onToggle={onToggle} onRemove={onRemove} upDate={upDate} onChange2={onChange2} utext={utext} setUpDate={setUpDate} />
    </div>
  );
}

const TodoItem = React.memo(function TodoItem({ todo, setUtext, onToggle, onRemove,onUpdate, upDate, onChange2, utext, setUpDate}){

  const onTodoUpdate = (id, text) => {
    onUpdate(id, text)
    setUpDate(!upDate)
    setUtext('')
  }

  return (
    <li style={{textDecoration: todo.done ? 'line-through' : 'none' }}>
      <p onClick={() => {onToggle(todo.id)}} style={{display: 'inline'}}>
        {todo.text}
      </p>
      
      <button onClick={()=>{onRemove(todo.id)}}>삭제</button>
      <button onClick={()=>{setUpDate(!upDate)}}>수정</button>
      {!upDate &&
      <div>
        <form>
          <input
            value={utext}
            placeholder="수정하세요"
            onChange={onChange2}
          />
          <input type="button" value="완료" onClick={() => {onTodoUpdate(todo.id, utext)}}/>
        </form>
      </div>  
      }
    </li>
  )
})

const TodoList = React.memo(function TodoList({ setUtext, todos, onToggle, onRemove,onUpdate, upDate, onChange2, utext, setUpDate }) {
  return (
    <ul>
      {todos.map( todo => (
        <TodoItem onUpdate={onUpdate} setUtext={setUtext} key={todo.id} todo={todo} onRemove={onRemove} onToggle={onToggle} upDate={upDate} onChange2={onChange2} utext={utext} setUpDate={setUpDate} />
      ))}
    </ul>
  )
})