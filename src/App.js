import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';
import HomePage from './components/HomePage';
import TaskForm from './components/TaskForm';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<TaskForm />} />
          <Route path="/update/:id" element={<TaskForm />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;