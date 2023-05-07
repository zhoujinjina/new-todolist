import { legacy_createStore as createStore } from "redux";
const initialState = {
  todos: [
    {
      id: "1",
      todoName: "cut hair",
      isCompleted: false,
    },
    {
      id: "2",
      todoName: "do housework",
      isCompleted: false,
    },
    {
      id: "3",
      todoName: "have a good job",
      isCompleted: false,
    },
  ],
  users: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "add":
      return { ...state, todos: [...state.todos, action.value] };
    case "remove":
      const newtodos = state.todos.filter((todo) => todo.id !== action.id);
      return { ...state, todos: [...newtodos] };
    case "edit":
      const newtodos1 = state.todos.map((item, index, arr) => {
        if (item.id === action.id) {
          item.todoName = action.todoName;
        }
        return item;
      });
      return { ...state, todos: [...newtodos1] };
    case "clear":
      return { ...state, todos: [] };
    case "clearcomplete":
      const newtodos2 = state.todos.filter(
        todo => todo.isCompleted === false
      );
      return { ...state, todos: [...newtodos2] };
      case "complete":
        state.todos.forEach(todo=>{
          if(todo.id===action.id){
            todo.isCompleted=!todo.isCompleted
          }
        })
        return {...state};
        case "register":
          return {...state,users:[...state.users,action.user ]}
    default:
      return state;
  }
};

const store = createStore(reducer, initialState);

export default store;
