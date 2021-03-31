import React from 'react';
import { withRouter } from "react-router-dom";
import Routes from './Routing/Routes';
import './App.css';

function App() {
  return (
    <div>
      <main>
        <Routes />
      </main>
    </div>
  );
}
export default withRouter(App);