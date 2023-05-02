import { Route, Switch } from "react-router-dom";
import "./App.css";
import AddFriend from "./components/AddFriend";
import FriendsList from "./components/FriendsList";
import Header from "./components/Header";
import Login from "./components/Login";
import { PrivateRoute } from "./components/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <PrivateRoute exact path="/friends" component={FriendsList} />
        <PrivateRoute path="/friends/add" component={AddFriend} />
      </Switch>
    </div>
  );
}

export default App;
