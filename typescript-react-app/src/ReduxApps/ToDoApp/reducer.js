
export default  function counterReducer(state = [], action) {

    if (action.type === 'add') {
        return [...state, {
            text: action.payload,
            id: state.length,
            selected: false,
            completed: false
        }]
    }

    if (action.type === 'selectNote') {
        console.log(action.id)
        return  [...state].splice(action.id, 1);
    }

    // if (action.type === 'selectNote') {
    //     return [...state]
    // }

    return state;
}
