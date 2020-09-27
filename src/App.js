import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AdminDashboard from './admin/AdminDashboard';
import ManufacturerDashboard from './manufacturer/ManufacturerDashboard';
import DistributorDashboard from './distributor/DistributorDashboard';
import RetailerDashboard from './retailer/RetailerDashboard';
import Login from './login/Login';

function App() {
  return (
    <main>
        <Switch>
            <Route path="/" component={Login} exact />
            <Route path="/admin" component={AdminDashboard} />
            <Route path="/manufacturer" component={ManufacturerDashboard} />
            <Route path="/distributor" component={DistributorDashboard} />
            <Route path="/retailer" component={RetailerDashboard} />
        </Switch>
    </main>
);
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
