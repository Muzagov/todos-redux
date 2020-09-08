const initialState = {
    loading: true,
    deleting: false,
    items: [],
    editing: false
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'load_items_start':
            return {
             ...state,
             loading: true
            }

        case 'load_items_success':
            return {
                ...state,
                loading: false,
                items: action.payload
            }

        case 'delete_item_start':
            return {
                ...state,
                deleting: true
            }

        case 'delete_item_success':
            return {
                ...state,
                deleting: false,
                items: state.items.filter(item => item.id !== action.payload)
            }

        case 'edit_item_start':
            return {
                ...state,
                editing: true
            }

        case 'edit_item_success':
            return {
                ...state,
                editing: false,

            }

        default:
            return state;
    }
}
