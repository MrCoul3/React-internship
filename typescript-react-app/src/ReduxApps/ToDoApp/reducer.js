export default  function counterReducer(state = [], action) {
    const currentID = [];
    if (action.type === 'add') {
        return [...state, {text: action.payload, id: [...currentID, ]}]
    }

    if (action.type === 'selectNote') {
        return [...state]
    }

    return state;
}
