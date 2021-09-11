export default  function counterReducer(state = [], action) {

    if (action.type === 'add') {
        return [...state, {text: action.payload}]
    }

    return state;
}
