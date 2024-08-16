import React from "react";

export default function CreateTopic() {
  return (
    <div className="col-12 col-md-9 border border-1 ">
    <div className="mt-4 mx-5">
      <div className="row heading">
        <h1 className="text-muted">Create Topic</h1>
      </div>
      <div className="row form">
        <form>
          <div className="form-group mt-2">
            <label htmlFor="topicTitle">Topic Title:</label>
            <input
              type="title"
              className="form-control mt-2"
              id="topicTitle"
              placeholder="Enter Title"
            />
          </div>
          <div className="form-group mt-2">
            <label htmlFor="topicDescription">Topic Description:</label>
            <textarea
              className="form-control mt-2 mb-2"
              id="topicDescription"
              placeholder="Enter Description"
              rows={3}
            ></textarea>
          </div>
        </form>
      </div>
      <div className="row buttons mb-2">
        <div className="col col-1">
          <button type="button" className="btn btn-success">
            Save
          </button>
        </div>
        <div className="col col-1">
          <button type="button" className="btn btn-danger">
            Cancel
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}
