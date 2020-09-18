const intitalState = {
    counter: 0,
    results: []
}

const reducer = (state = intitalState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                counter: state.counter + 1
            };
        case 'DECREMENT':
            return {
                ...state,
                counter: state.counter - 1
            };
        case 'ADD':
            return {
                ...state,
                counter: state.counter + action.payload.value
            };
        case 'SUBTRACT':
            return {
                ...state,
                counter: state.counter - action.payload.value
            };
        case 'STORE_RESULT':
            return {
                ...state,
                results: state.results.concat({ key: new Date(), value: state.counter }) 
                // Use concat instad of push, not to mutate original state
            };
        case 'DELETE_RESULT':
            const updatedArray = state.results.filter((result) => {
                return result.key !== action.payload.idtoDelete // return only element whose id is not equal to deleted id
            })// So it will return the updated array without deleted item
            return {
                ...state,
                results: updatedArray
            };

        default:
            break;
    }
    if (action.type === 'INCREMENT') {
        return {
            counter: state.counter + 1
        }
    }
    return state;
};

export default reducer;