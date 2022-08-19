import { Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AddTodo from './components/Todo/AddTodo';
import TodosList from './components/Todo/Todolist';
import Login from './components/User/Login';
import SignUp from './components/User/SignUp';
import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Navbar';

function App() {
  const [user,setUser] = React.useState(null);
  const [token,setToken] = React.useState(null);
  const [error,setError] = React.useState('');

  async function login(user = null){
    //default user to null
    setUser(user);
  }
  async function logout(){
    setUser(null);
  }
  async function signup(user = null){
    //default user to null
    setToken(user);
  };



  return (
    <div className="App">
      <Navbar bg="primary" variant="dark">
        <div className="container-fluid">
          <Navbar.Brand>Todo App</Navbar.Brand>
          <Nav className="me-auto">
            <Container>
              <Link class="nav-link" to ={"/todo"}>Todos</Link>
              { user ? (
                <Link class="nav-link">Logout({user})</Link>
              ):(
                <>
                  <Link class="nav-link" to = {"/login"}>Login</Link>
                  <Link class="nav-link" to ={"/signup"}>Signup</Link>
                </>
              )}
            </Container>
          
          </Nav>
        </div>
      </Navbar>
      <div className="container mt-4">
              <Switch>
                <Route exact path={["/","todos"]} render={(props)=>
                  <TodosList {...props} token={token}/>
                }></Route>
                <Route path="/todos/create" render={(props)=>
                  <AddTodo {...props} token={token}/>
                }></Route>
                <Route path="/todos/:id/" render={(props)=>
                  <AddTodo {...props} token={token}/>
                }></Route>
                <Route path="/login" render={(props)=>
                  <Login {...props} login={login}/>
                }></Route>
                <Route path="/signup" render={(props)=>
                  <SignUp {...props} signup={signup}/>
                }></Route>
              </Switch>

      </div>
    </div>
  );
}

export default App;
