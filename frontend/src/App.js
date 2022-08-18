import { Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AddTodo from './components/Todo/AddTodo';
import TodosList from './components/Todo/Todolist';
import Login from './components/User/Login';
import SignUp from './components/User/SignUp';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar bg="primary" variant="dark">
        <div className="container-fluid">
          <Navbar.Brand>React-bootstrap</Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </div>
      </Navbar>
    </div>
  );
}

export default App;
