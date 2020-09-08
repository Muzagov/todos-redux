export function loadItems() {
    return (dispatch) => {
        dispatch({ type: 'load_items_start' });

        fetch("https://jsonplaceholder.typicode.com/todos?userId=1")
            .then((response) => response.json())
            .then((json) => {
                dispatch({
                    type: 'load_items_success',
                    payload: json
                });
            });
    };
}

export function deleteItem(id) {
    return (dispatch) => {
        dispatch({ type: 'delete_item_start' });

        fetch(`https://jsonplaceholder.typicode.com/todos${id}`, {
            method: "DELETE"
        })
            .then((response) => response.json())
            .then((json) => {
                dispatch({
                    type: 'delete_item_success',
                    payload: id
                });
            });
    }
}

export const editItem = (id) => {
    return function (dispatch) {
        dispatch({ type: 'edit_item_start' });

        fetch(`https://jsonplaceholder.typicode.com/posts${id}`, {
            method: 'PATCH',
            body: JSON.stringify({
                completed: false
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(json => {
                dispatch({
                    type: 'edit_item_success',
                    payload: id
                })
            })
    }
}
