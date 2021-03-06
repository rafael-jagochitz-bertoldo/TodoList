import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Dashboard from "../pages/Dashboard";
import Menu from "../components/Menu";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

function Routes() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@todo-list:token"));

    if (token) {
      return setAuthenticated(true);
    }
  }, [authenticated]);

  const handleLogout = () => {
    localStorage.clear();
    setAuthenticated(false);
  };

  return (
    <AnimatePresence>
      <Switch>
        <Route exact path="/">
          <Menu authenticated={authenticated} />
          <Home
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          />
        </Route>
        <Route path="/signup">
          <Menu authenticated={authenticated} />
          <Signup
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          />
        </Route>
        <Route path="/login">
          <Menu authenticated={authenticated} />
          <Login
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          />
        </Route>
        <Route path="/dashboard">
          <Menu handleLogout={handleLogout} authenticated={authenticated} />
          <Dashboard
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          />
        </Route>
      </Switch>
    </AnimatePresence>
  );
}

export default Routes;
