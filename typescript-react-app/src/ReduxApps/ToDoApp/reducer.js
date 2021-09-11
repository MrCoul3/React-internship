export default  function counterReducer(state = [], action) {

    if (action.type === 'add') {
        return [...state, {text: action.payload, select: false}]
    }

    if (action.type === 'selectNote') {
        return [...state]
    }

    return state;
}
