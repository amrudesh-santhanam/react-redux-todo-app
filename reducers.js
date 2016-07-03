import { combineReducers } from 'redux';
import _ from 'lodash';

function todoReducer(state = [],action){
  switch (action.type) {
    case 'CHECK_TODO':
      var id = _.findIndex(state,{'text':action.payload});
      var newState = _.clone(state);
      newState[id].completed = !newState[id].completed;
      return newState;
    case 'ADD_TODO':
      if (_.isEmpty(action.payload)) { // If action is empty, just return state. No change
        return state;
      }
      if (_.findIndex(state,{text: action.payload}) >= 0) { // If action already found, then, just return state. No change.
        return state;
      }
      var newTodo = [{text: action.payload, completed: false}];
      var newState = _.union(state,newTodo);
      return newState;
    case 'CLEAR_TODOS':
      var newState = [];
      state.map(item => {
        if (!item.completed){
          newState = _.union(newState,[item]);
        }
      });
      return newState;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  todos: todoReducer
});

export default rootReducer;
