import React from "react";
import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import TopicPage from "./TopicPage";
import LoginPage from "./Login";
import SignUpPage from "./Signup";
// import TopicPage from "./TopicPage";
// import EditTopic from "./TopicPage/EditTopicPage";
import store from "./store";
import { Provider } from "react-redux";
import PostPage from "./PostPage";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/SignUp" element={<SignUpPage/>}/>
          <Route path="/Home/*" element={<HomePage/>}/>
          <Route path="/Topics/:tid/*" element={<TopicPage/>}/>
          <Route path="/Topics/:tid/CenterPanel/:pid" element={<PostPage/>}/>         
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
