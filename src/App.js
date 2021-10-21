import "./App.css";
import { Route, Switch } from "react-router";
import Header from "./components/shared/Header/Header";
import Footer from "./components/shared/Footer/Footer";
import Home from "./pages/Home/Home";
import NewGame from "./pages/NewGame/NewGame";
import GuardedRoute from "./components/auth/GuardedRoute/GuardedRoute";
import Login from "./pages/Login/Login";
import Logout from "./pages/Logout/Logout";
import Profiles from "./pages/Profiles/Profiles";

function App() {
    return (
        <div className="App">
            <Header />
            <Switch>
                <Route path="/login" component={Login} />
                <GuardedRoute path="/" exact={true} component={Home} />
                <GuardedRoute path="/game/new" component={NewGame} />
                <GuardedRoute path="/profiles/:userId" component={Profiles} />
                <Route path="/logout" component={Logout} />
            </Switch>
            <Footer />
        </div>
    );
}

export default App;
