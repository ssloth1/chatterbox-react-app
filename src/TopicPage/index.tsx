import React, { useState, useEffect } from "react";
import "./styles.css";
import { Link, useParams } from "react-router-dom";
import posts from "../Database/posts.json";
import * as client from "./client";

export default function TopicPage() {
  const { tid } = useParams<{ tid: string }>();
  const [topics, setTopics] = useState<any[]>([]);

  const deleteTopic = async (topicId: string) => {
    await client.deleteTopic(topicId);
    setTopics(topics.filter((t) => t._id !== topicId));
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
        <div className="col-9 center-col">
          <div className="content-container">
            <h1>Posts</h1>
            {/* {postData.map((post, index) => (
              <div key={index} className="post-details">
                <Link
                  to={`/${post._id}`}
                  className="link-dark link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
                >
                  <b>{post.title}</b>
                  <h5>{post.postTitle}</h5>
                  <p>{post.postDesc}</p>
                </Link>
              </div>
            ))} */}
          </div>
        </div>
      </div>
    </div>
  );
}
