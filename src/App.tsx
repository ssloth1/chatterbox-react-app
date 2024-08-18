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
import LandingPage from "./LandingPage";

// import bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";


import Test from "./Test";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/SignUp" element={<SignupPage />} />
          <Route path="/Home/*" element={<AuthWrapper> <HomePage /> </AuthWrapper>} />
          <Route path="/:pid" element={<AuthWrapper> <PostPage /> </AuthWrapper>} />
          <Route path="/test" element={<AuthWrapper> <Test /> </AuthWrapper>} />
          <Route path="/profile" element={<AuthWrapper> <ProfilePage /> </AuthWrapper>} />
          <Route path="/Topics/:tid" element={<AuthWrapper> <HomePage /> </AuthWrapper>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;