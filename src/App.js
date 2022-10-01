import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import HelloContainer from './components/HelloContainer';

function App() {
  return (
    <>
      <Link to="/greetings">Link to Greetings</Link>
      <Routes>
        <Route path="/greetings" element={<HelloContainer />} />
      </Routes>
    </>
  );
}

export default App;
