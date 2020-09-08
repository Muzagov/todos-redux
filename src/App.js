import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {loadItems} from "./actions";
import Todos from "./Todos";


function App() {
  const loading = useSelector(state => state.loading)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadItems())
  }, [])

  return (
    <div>
      {loading ? (
        <div className="alert alert-info">
          Подождите: идёт загрузка данных
        </div>
      ): <Todos/>}

    </div>
  );
}

export default App;
