
import './App.css';
import Sidebar from './sidebar';
import Topbar from './topbar';
import Dashboard from './dashboard';
import User from './user';
import EditUser from './editUser';
import CreateUser from './createUser';
import Profile from './profile';
import {UserProvider} from './userContext'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (
    <>
      <Router>
        <div id="page-top" >
          <div id="wrapper">
            <Sidebar />

            <UserProvider>
              <div id="content-wrapper" class="d-flex flex-column">
                <div id="content">
                  <Topbar />
                  <div class="container-fluid">
                    <Switch>

                      <Route path="/" exact={true}>
                        <Dashboard />
                      </Route>

                      <Route path="/user" exact={true}>
                        <User />
                      </Route>

                      <Route path="/create-user" exact={true}>
                        <CreateUser />
                      </Route>

                      <Route path="/edit-user/:id" component={EditUser} exact={true} />

                      <Route path="/profile/:id" component={Profile} exact={true} />

                    </Switch>
                  </div>
                </div>
              </div>
            </UserProvider>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
