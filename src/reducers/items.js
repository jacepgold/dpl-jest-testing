const items = ( state = [], action ) => {
  switch(action.type) {
    case 'ADD_ITEM':
      return [action.name, ...state]
    case 'UPDATE_ITEM':
      return state.map( (item, index) => {
         if (index === action.index)
           return action.name
         return item
      });
    case 'REMOVE_ITEM':
      return [...state.slice(0, action.index), ...state.slice(action.index +1, state.length)]
    default:
      return state;
  }
}

export default items;
