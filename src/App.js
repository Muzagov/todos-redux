import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import toggleLoading from "./actions";

function App() {
  const loading = useSelector(state => state.loading)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(toggleLoading())
  }, [])

  return (
    <div>
      {loading ? "вкл" : "выкл"}
    </div>
  );
}

export default App;
