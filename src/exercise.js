import { createStore } from "redux"

const initialState = {
  counter: 0,
  text: '',
  list: []
}

const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const CHANGE_TEXT = 'CHANGE_TEXT';
const ADD_TO_LIST = 'ADD_TO_LIST';

const increase = () => {
  return {
    type: INCREASE
  }
}

const decrease = () => ({
  type: DECREASE
});

const changeText = text => ({
  type: CHANGE_TEXT,
  text // 액션안에는 type 외에 추가적인 필드를 마음대로 넣을 수 있습니다.
});

const addToList = item => ({
  type: ADD_TO_LIST,
  item
});


function reducer(state = initialState, action) {
  switch(action.type){
    case INCREASE :
      return {
        ...state,
        counter: state.counter + 1
      }
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1
      } 
    case CHANGE_TEXT:
      return {
        ...state,
        text: action.text
      }  
    case ADD_TO_LIST:
      return {
        ...state,
        list: state.list.concat(action.item)
      }
    default:
      return state  
  }
}

const store = createStore(reducer)


const listener = () => {
  const state = store.getState();
  console.log(state);
};


const unsubscribe = store.subscribe(listener);

listener()
store.dispatch(increase())
store.dispatch(decrease())
store.dispatch(changeText("효선짱짱"))
store.dispatch(addToList("효선짱짱맨"))