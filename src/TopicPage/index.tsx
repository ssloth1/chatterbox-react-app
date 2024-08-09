import React, { useState, useEffect } from "react";
import "./styles.css";
import { Link, useParams } from "react-router-dom";
import posts from "../Database/posts.json";

type Post = {
  _id: string;
  title: string;
  postTitle: string;
  postDesc: string;
};

export default function TopicPage() {
  const [postData, setPostData] = useState<Post[]>([]);
  const { tid } = useParams<{ tid: string }>(); // Capture the tid parameter from the URL

  useEffect(() => {
    // Filter posts where post.title matches the tid from the URL
    const filteredPosts = posts.filter(post => post.title === tid).map((post) => ({
      _id: post._id,
      title: post.title,
      postTitle: post.postTitle,
      postDesc: post.postDesc.length > 200 ? `${post.postDesc.substring(0, 197)}...` : post.postDesc,
    }));
    setPostData(filteredPosts);
  }, [tid]); // Depend on tid so that the effect runs again if the URL parameter changes

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
            <Link to="/Home" className="link-dark link-underline link-underline-opacity-0 link-underline-opacity-100-hover">
              <button className="btn btn-lg btn-danger me-1 float-end full-width">Home Page</button>
            </Link>
            <button className="btn btn-lg btn-danger me-1 float-end full-width">Profile</button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-3 left-col">
          <div className="create-topic-button-container">
            <button className="btn btn-lg btn-danger me-1 float-end full-width">Create Topic</button>
          </div>
        </div>
        <div className="col-9 center-col">
          <div className="content-container">
            <h1>Posts</h1>
            {postData.map((post, index) => (
              <div key={index} className="post-details">
                <Link to={`/${post._id}`} className="link-dark link-underline link-underline-opacity-0 link-underline-opacity-100-hover">
                  <b>{post.title}</b>
                  <h5>{post.postTitle}</h5>
                  <p>{post.postDesc}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="col-3"></div>
      </div>
    </div>
  );
}
