import React from "react";
import Loadable from 'react-loadable';
import Loading from "../ui-molecules/Loading/index";
import { BrowserRouter as Router, Route } from 'react-router-dom';

// const App = Loadable({
//     loader: () => import("../App"),
//     loading: Loading
// });
const Ports = Loadable({
    loader: () => import("../Pages/Ports"),
    loading: Loading
});
const Drawers = Loadable({
    loader: () => import("../Drawers"),
    loading: Loading
});
const Routes = () => {
    return (
        <div>
             {/* <Route exact path="/" component={App} /> */}
                {/* <Route path="/Ports" component={Ports} /> */}
                <Route exact path="/" component={Drawers} />

        </div>
    );
};

export default Routes;
