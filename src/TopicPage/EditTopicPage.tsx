import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";


export default function EditTopic() {
  return (
    <div>
      {/* <div className="row home-page-row">
        <div className="col col-6">
          <div className="border-rounded search-container">
            <input className="border-0 full-width" placeholder="Search" />
          </div>
        </div>
        <div className="col col-6">
          <div className="button-container">
            <Link to="/Home" className="link-dark link-underline link-underline-opacity-0 link-underline-opacity-100-hover">
              <button className="btn btn-lg btn-danger me-1 float-end full-width">Home Page</button>
            </Link>
            <button className="btn btn-lg btn-danger me-1 float-end full-width">Profile</button>
          </div>
        </div>
      </div>
      <div className="row content-input" style={{ width: "50%", margin: "0 auto" }}>
        <form>
          <div className="mb-3">
            <label htmlFor="postTitle" className="form-label">Topic Title</label>
            <input
            //   value={postTitle}
            //   onChange={(e) => setPostTitle(e.target.value)}
              type="text"
              id="postTitle"
              className="form-control"
              placeholder="Enter your post title here"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="postDescription" className="form-label">Topic Description</label>
            <textarea
            //   value={postDesc}
            //   onChange={(e) => setPostDesc(e.target.value)}
              id="postDescription"
              className="form-control"
              placeholder="Enter your post description here"
              rows={4}
            ></textarea>
          </div>
          <button className="btn btn-lg btn-danger me-1 float-end full-width" >Save</button>
          <button className="btn btn-lg btn-secondary me-1 float-end" >Cancel</button>
        </form>
      </div> */}
    </div>
  );
}
