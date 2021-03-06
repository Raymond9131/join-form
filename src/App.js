import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Form1 from "./Components/Form1";
import Thankyou from "./Components/Thankyou";
import Otp from "./Components/Otp";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/form" component={Form1} />
          <Route exact path="/thankyou" component={Thankyou} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/otp" component={Otp} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
