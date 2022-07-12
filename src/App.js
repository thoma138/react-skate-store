import { BrowserRouter as Router } from "react-router-dom";
import BaseRouter from "./routes";
import Login from "./Login";
import { auth } from "./firebase";
import { useEffect } from "react";
import { useStateValue } from "./StateProvider";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>>", authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <BaseRouter />
    </Router>
  );
}

export default App;
