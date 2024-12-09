import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UsersList from './UserList';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserForm from './UserForm';

function App() {
  console.log("App component rendered");
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path="/" element={<UserForm />} />
        <Route path="/users" element={<UsersList />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;