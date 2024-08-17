import React, { useState, useEffect } from "react";
import "./styles.css";
import { Link, useParams, useNavigate } from "react-router-dom";
import { BsArrowUp } from 'react-icons/bs';
//import posts from "../Database/posts.json";
import * as client from "./client";
import * as reducer from "./reducer";
import { useDispatch, useSelector } from "react-redux";

type Post = {
  _id: string;
  title: string;
  postTitle: string;
  postDesc: string;
  likes: number;
};

export default function TopicPage() {
  const { tid } = useParams<{ tid: string }>();
  const [topics, setTopics] = useState<any[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const navigate = useNavigate();
  const { posts } = useSelector((state: any) => state.postsReducer);
  const dispatch = useDispatch();

  const fetchPosts = async () => {
    const allPosts = await client.fetchAllPosts();
    dispatch(reducer.setPosts(allPosts));
  };

  useEffect(() => {
    fetchPosts();
  }, [dispatch]);

  useEffect(() => {
    if (tid) {
      setFilteredPosts(posts.filter((post: Post) => post.title === tid));
    }
  }, [posts, tid]);

  const deleteTopic = async (topicId: string) => {
    // non functional rn- dependant on Mansi's APIs
    await client.deleteTopic(topicId);
    setTopics(topics.filter((t) => t._id !== topicId));
  };

  const handleDeletePost = async (postId: string) => {
    //Are we routing to postpage??
    }
    const handleLike = (postId: string) => {
      // need James' APIs
    };
 
  return (
    <div>
      <div className="row home-page-row">
        <div className="col col-6">
          <div className="col border-rounded search-container">
            <input className="border-0 full-width" placeholder="Search" />
          </div>
        </div>
        <div className="col col-6">
          <div className="col button-container">
            <Link
              to="/Home"
              className="link-dark link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
            >
              <button className="btn btn-lg btn-danger me-1 float-end full-width">
                Home Page
              </button>
            </Link>
            <button className="btn btn-lg btn-danger me-1 float-end full-width">
              Profile
            </button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-3 left-col">
          <div className="create-topic-button-container">
            <Link
              to={`/${tid}/CreatePost`}
              className="link-dark link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
            >
              <button className="btn btn-lg btn-danger edit-post me-1 float-end">
                Create Post
              </button>
            </Link>
            <br />
            <br />
            <br />
            <button className="btn btn-lg btn-danger del-post me-1 float-end">
              Delete Topic
            </button>
            <br />
            <br />
            <br />
            <button className="btn btn-lg btn-danger del-post me-1 float-end">
            <Link
              to={`/${tid}/EditTopic`}
              className="link-dark link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
            >
              Edit Topic
              </Link>
            </button>
          </div>
        </div>
         {/* HERE IS MY SECTION THAT WORKS @MANSI */}
        <div className="col-9 center-col">
          <div className="content-container">
            <h1>Posts</h1>
            <ul>
              {filteredPosts.map((post: any) => (
                <div
                  key={post._id}
                  id="wd-topics-page"
                  className="p-3 bg-white rounded grey-border"
                ><button
                onClick={() => handleDeletePost(post._id)} //needs implement
                  className="btn btn-danger btn-sm delete-btn">Delete</button>
                  <div className="like-section">
                    <button
                      onClick={() => handleLike(post._id)} //needs implement
                      className="btn btn-sm btn-outline-danger"
                    >
                      Like <BsArrowUp className="fs-3" />
                    </button>
                    <span className="ms-2">{post.likes}</span>
                  </div>
                  <div className="topic-details">
                    <h3>{post.postTitle}</h3>
                    <p>{post.postDesc}</p>
                  </div>
                </div>
              ))}
            </ul>
          </div>
        </div>
         {/* HERE IS MY SECTION THAT WORKS @MANSI */}
      </div>
    </div>
  );
}
