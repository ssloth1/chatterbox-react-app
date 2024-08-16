// src/App.tsx

import React from "react";
import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import PostPage from "./PostPage";
import LoginPage from "./Account/LoginPage";
import SignupPage from "./Account/SignupPage";
import store from "./store";
import ProfilePage from "./Account/ProfilePage";
import { Provider } from "react-redux";
import AuthWrapper from "./Account/AuthWrapper";

import Test from "./Test";

// add a .env.local file to the root of the project and add the following line
//REACT_APP_REMOTE_SERVER=http://localhost:4000
// const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
// you can also go to /test to check if the node server is running
// just make sure you have .env.local file set up with the correct server

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/home" element={<AuthWrapper> <HomePage /> </AuthWrapper>} />
          <Route path="/:pid" element={<AuthWrapper> <PostPage /> </AuthWrapper>} />
          <Route path="/test" element={<AuthWrapper> <Test /> </AuthWrapper>} />
          <Route path="/profile" element={<AuthWrapper> <ProfilePage /> </AuthWrapper>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
export default App;