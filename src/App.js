import { useState } from "react";
import "./App.css";
import Landing from "./screens/landing/index";
import Login from "./screens/login";
import { Provider } from "react-redux";
import store from "./store/index";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(true);
  return (
    <Provider store={store}>
       <Landing />
      {/* {isLoggedIn ? (
        <Landing />
      ) : (
        <div className="App">
          <Login onSuccess={setLoggedIn} />
        </div>
      )} */}
    </Provider>
  );
}

export default App;
