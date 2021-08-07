import React from 'react'
import './css/App.css';
import Home from './components/Home';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <Router className="App">
      <Switch>
        <Route path="/user-signup">
          <SignUp />
        </Route>
        <Route path="/user-signin">
          <SignIn />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>


      {/* { feed } */}

      {/* { widget} */}
    </Router >
  );
}

export default App;






// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";
// import Homepage from './pages/Homepage'

// function App() {
//   return (
//     <Router>
//       <Switch>
//         <Route exact path="/">
//           <Homepage />
//         </Route>
//         {/* <Route path="/about">
//           <About />
//         </Route>
//         <Route path="/dashboard">
//           <Dashboard />
//         </Route> */}
//       </Switch>
//     </Router>
//   );
// }

// export default App;

