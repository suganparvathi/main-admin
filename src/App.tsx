// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

import Dashboard from "./pages/Dashboard/Dashboard";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";

import routes from "./data/routes";
import PublicRoute from "./routes/PublicRoute";
import { RootState } from "./store";
import ForgotPassword from "./pages/SignUp/Components/ForgotPassword";
import Validation from "./pages/SignUp/Components/Validation";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const auth = useSelector((state: RootState) => state.auth);

  console.log(auth);

  const handleAutoLogin = () => {
    try {
      if (localStorage.getItem("token")) {
      }
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  useEffect(() => handleAutoLogin(), []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/sign-in"
          element={
            <PublicRoute Component={SignIn} restricted={auth.isLoggedIn} />
          }
        />
        <Route
          path="/sign-up"
          element={
            <PublicRoute Component={SignUp} restricted={auth.isLoggedIn} />
          }
        />
          <Route
          path="/forgot-password"
          element={
            <PublicRoute Component={ForgotPassword} restricted={auth.isLoggedIn} />
          }
        />
         <Route
          path="validation-password"
          element={
            <PublicRoute Component={Validation} restricted={auth.isLoggedIn} />
          }
        />
        <Route path="/" element={<Dashboard />}>
          {routes.map(({ path, Element }) => (
            <Route path={path} element={<Element />} key={path} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
