import React, { useState, useEffect } from "react";
import posts from "../Database/posts.json"; 
import "./styles.css";

export default function HomePage() {
  const [postData, setPostData] = useState<
    { title: string; postTitle: string; postDesc: string }[]
  >([]);

  useEffect(() => {
    const loadedPosts = posts.map(post => ({
      title: post.title, 
      postTitle: post.postTitle,
      postDesc: post.postDesc.length > 200 ? post.postDesc.substring(0, 197) + '...' : post.postDesc
    }));
    setPostData(loadedPosts);
  }, []);

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
            <button className="btn btn-lg btn-danger me-1 float-end full-width">
              Profile
            </button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-3 left-col">
          <div className="create-topic-button-container">
            <button className="btn btn-lg btn-danger me-1 float-end full-width">
              Create Topic
            </button>
          </div>
        </div>
        <div className="col-9 center-col">
          <div className="content-container">
            <h1>Posts</h1>
            {postData.map((post, index) => (
              <div key={index} className="post-details">
                <b>{post.title}</b>
                <h5>{post.postTitle}</h5>
                <p>{post.postDesc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="col-3"></div>
      </div>
    </div>
  );
}
