import React from "react";
import { useParams, Link } from "react-router-dom";

export default function EditPost() {

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
      <div className="row content-input" style={{ width: '50%', margin: '0 auto' }}>
        <form>
          <div className="mb-3">
            <label htmlFor="postTitle" className="form-label">
              Post Title
            </label>
            <input
              type="text"
              id="postTitle"
              name="postTitle"
              className="form-control"
              placeholder="Enter your post title here"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="postDescription" className="form-label">
              Post Description
            </label>
            <textarea
              id="postDescription"
              name="postDescription"
              className="form-control"
              placeholder="Enter your post description here"
              rows={4}
            ></textarea>
          </div>
          <button className="btn btn-lg btn-danger me-1 float-end full-width">
            Submit
            </button>
        </form>
      </div>
    </div>
  );
}
