import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import PostPage from "./PostPage";
import LoginPage from"./Login";
import SignUpPage from "./Signup";
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
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
