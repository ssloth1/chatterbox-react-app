// src/App.tsx

import React from "react";
import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import PostPage from "./PostPage";
import LoginPage from "./Account/LoginPage";
import SignupPage from "./Account/SignupPage";
import EditUser from "./Profile/EditUser";
import store from "./store";
import Profile from "./Profile";
import { Provider } from "react-redux";
import AuthWrapper from "./Account/AuthWrapper";
import LandingPage from "./LandingPage";
import StaffPanel from "./StaffPanel";
import TopicPage from "./TopicPage";

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
          <Route path="/profile" element={<AuthWrapper> <Profile /> </AuthWrapper>} />
          <Route path="/profile/:userId" element={<AuthWrapper><Profile /></AuthWrapper>} />
          <Route path="/Topics/:tid/*" element={<AuthWrapper> <TopicPage /> </AuthWrapper>} />
          <Route path="/profile/EditUser/:userId" element={<AuthWrapper><EditUser /></AuthWrapper>} />
          {/* to acess the admin panel, a staff member must be logged in, 
          then they will need to manually enter the route https://chatterbox-react-app.netlify.app/admin,
          or if they are working locally http://localhost:3000/admin */}
          <Route path="/admin" element={<AuthWrapper> <StaffPanel /> </AuthWrapper>} />

        </Routes>

      </BrowserRouter>
    </Provider>
  );
}

export default App;
