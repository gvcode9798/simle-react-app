import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./reusable/Home";

const BaseComponent = () => {
  return (
    <Switch>
      {/* <Route path='/' exact component={Home }/>
          <Route path='/' exact component={Home }/> */}
    </Switch>
  );
};

export default BaseComponent;
