import React from "react";
import Loadable from 'react-loadable';
import Loading from "../ui-molecules/Loading/index";
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Ports = Loadable({
    loader: () => import("../Pages/Ports"),
    loading: Loading
});
const Countrylist = Loadable({
    loader: () => import("../Countrylist"),
    loading: Loading
});
const Routes = () => {
    return (
        <div>
            <Router>
                <Route exact path="/" component={Countrylist} />
                <Route  path="/Ports" component={Ports} />

            </Router>
        </div>
    );
};
export default Routes;