import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { deletePost } from "./reducer";

export default function PostPage() {
  const { pid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { posts } = useSelector((state: any) => state.postsReducer);

  const post = posts.find((p: any) => p._id === pid);

  const handleDelete = (postId: string) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      dispatch(deletePost(postId));
      navigate("/Home");
    }
  };

  if (!post) {
    navigate("/");
    return null;
  }

  return (
    <div>
      <div className="row home-page-row">
        <div className="col col-6">
          <div className="border-rounded search-container">
            <input className="border-0 full-width" placeholder="Search" />
          </div>
        </div>
        <div className="col col-6">
          <div className="button-container">
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
              to={`/${pid}/EditPost`}
              className="link-dark link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
            >
              <button className="btn btn-lg btn-danger edit-post me-1 float-end">
                Edit Post
              </button>
            </Link>
            <br />
            <br />
            <br />
            <button
              className="btn btn-lg btn-danger del-post me-1 float-end"
              onClick={() => handleDelete(post._id)}
            >
              Delete Post
            </button>
          </div>
        </div>
        <div className="col-9 center-col">
          <div className="content-desc-container">
            <>
              <Link
                to={`/${post.title}/posts`}
                className="link-dark link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
              >
                <h5>{post.title}</h5>
              </Link>

              <h2>{post.postTitle}</h2>
              <p>{post.postDesc}</p>
            </>
          </div>
        </div>
      </div>
    </div>
  );
}
