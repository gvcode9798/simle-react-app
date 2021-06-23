import "./App.css";
import Login from "./component/login";
import SignUp from "./component/SignUp";
import Home from "./component/reusable/Home";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AddProduct from "./component/AddProduct";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Switch>
          {/* <Route exact path="/" component={Home} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/login" component={Login} />
          {/* <Route path="/add-product" component={AddProduct} /> 
         */}
          <Route exact path="/" component={Home} />
        </Switch>
      </Provider>
    </BrowserRouter>
  );
}
export default App;
