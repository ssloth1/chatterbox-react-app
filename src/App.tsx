import React from "react";
import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import PostPage from "./PostPage";
import TopicPage from "./TopicPage";
import LoginPage from"./Login";
import SignUpPage from "./Signup";
import CreatePost from "./PostPage/CreatePost";
import EditPost from "./PostPage/EditPost";
import store from "./store";
import { Provider } from "react-redux";


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/SignUp" element={<SignUpPage/>}/>
          <Route path="/Home" element={<HomePage/>}/>
          <Route path="/:pid" element={<PostPage />} />
          <Route path="/:tid/posts" element={<TopicPage/>}/>
          <Route path="/:tid/CreatePost" element={<CreatePost/>}/>
          <Route path="/:pid/EditPost" element={<EditPost/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
