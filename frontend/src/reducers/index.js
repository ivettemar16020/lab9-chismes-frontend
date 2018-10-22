/*
    Reducers
*/

const chismes = (state=[],action)=>{
    switch(action.type){
      case 'CHISME_CREATED':
        return [
          ...state,
          {
            id: action.id,
            title: action.title,
            content: action.content,
          }
        ];
      case 'CHISME_UPDATED':
        return [
          ...state,
          {
            content: action.content,
          }
        ];
      case 'CHISME_DELETED':
          const newState = [...state];
          delete newState[action.id];
          return newState;
      default:
        return state;
    }
  }
  
  export default chismes;