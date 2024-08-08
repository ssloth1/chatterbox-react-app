import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import PostPage from "./PostPage";
import store from "./store";
import { Provider } from "react-redux";
import TopicPage from "./TopicPage";


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TopicPage />} />
          <Route path="/:pid" element={<PostPage />} />
          {/*  topic id */}
          <Route path="/profile/:tid/*" element={<TopicPage />} />
          <Route path="/posts/:pid/topics/:tid" element={<TopicPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
