import React from 'react';
import './components/styles/Form.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Login from './components/Login';
import SignUp from './components/SignUp';
import Form from './components/Form';
function App() {
  return (
    <Router>     
    <div className='container'>     
     <Form />
     <Routes>     
     <Route path="/login" element={<Login />} />
     <Route path="/signup" element={<SignUp />} />
     </Routes>
    </div>
    </Router>
  );
}

export default App;
