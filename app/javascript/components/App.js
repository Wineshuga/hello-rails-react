import React, { useEffect } from 'react';
import { Routes, Route} from 'react-router-dom';
import Greeting from './Greeting';
import { useDispatch } from 'react-redux';
import { getMessage } from '../redux/messageSlice';

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getMessage())
  }, [])
  return (
    <Routes>
      <Route path="/" element={<Greeting />} />
    </Routes>
  )
}
export default App