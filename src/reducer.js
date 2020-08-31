const initialState = {
    loading: false,
    items: []
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "toggle" :
            return {
             ...state,
                loading: false
            }
        default:
            return state;
    }
}
