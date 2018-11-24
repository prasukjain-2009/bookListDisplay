function activeBookReducer(state=null,action){
  switch(action.type){
    case "BOOK_SEECTED":
      return action.payload
    default:
      return state
  }
}
export default activeBookReducer;