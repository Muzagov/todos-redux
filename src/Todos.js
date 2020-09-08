import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import "./Todos.css"
import {deleteItem, editItem} from "./actions";

function Todos() {
    const items = useSelector((state) => state.items)
    const deleting = useSelector((state) => state.deleting)
    const editing = useSelector((state) => state.editing)
    const dispatch = useDispatch()

    return (
        <ul className="list-group">
            {items.map((item) => {
            return (
                <li key={item.id} className="list-group-item todo-item">
                    <div className="todo-checkbox">
                        <input
                            type="checkbox"
                            checked={item.completed}
                            disabled={editing}
                            onClick={() => dispatch(editItem())}
                        />
                    </div>
                    <div className="todo-title">
                        {item.title}
                    </div>
                    <div>
                        <button
                            className="btn btn-link text-danger btn-sm"
                            disabled={deleting}
                            onClick={() => dispatch(deleteItem(item.id))}
                        >
                            удалить
                        </button>
                    </div>
                </li>
            )
            })}
        </ul>
    );
}

export default Todos;
