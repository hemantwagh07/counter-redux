import * as actionTypes from './actions'
const intitalState = {
    counter: 0,
    results: []
}

const reducer = (state = intitalState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            };
        case actionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            };
        case actionTypes.ADD:
            return {
                ...state,
                counter: state.counter + action.payload.value
            };
        case actionTypes.SUBTRACT:
            return {
                ...state,
                counter: state.counter - action.payload.value
            };
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({ key: new Date(), value: state.counter })
                // Use concat instad of push, not to mutate original state
            };
        case actionTypes.DELETE_RESULT:
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
    
    return state;
};

export default reducer;