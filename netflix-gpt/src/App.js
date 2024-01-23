import { Provider } from "react-redux";
import Body from "./components/Body";
import appStore from "./utils/appStore";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Provider store={appStore}>
        <Body />
        <Outlet />
      </Provider>
    </div>
  );
}

export default App;
