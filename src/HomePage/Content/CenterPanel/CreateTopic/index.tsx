import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createTopic } from "../../../../TopicPage/client";
export default function CreateTopic({displayAllTopics}: {displayAllTopics: any}) {
  const navigate = useNavigate();
  const[title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const saveTopic = async () => {
    await createTopic({topicTitle: title, topicDesc : desc});
    displayAllTopics('');
    navigate('./../');

  }
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
              value={title}
              onChange={(e)=>setTitle(e.target.value)}
            />
          </div>
          <div className="form-group mt-2">
            <label htmlFor="topicDescription">Topic Description:</label>
            <textarea
              className="form-control mt-2 mb-2"
              id="topicDescription"
              placeholder="Enter Description"
              rows={3}
              value={desc}
              onChange={(e)=>setDesc(e.target.value)}

            ></textarea>
          </div>
        </form>
      </div>
      <div className="row buttons mb-2">
        <div className="col col-1">
          <button type="button" className="btn btn-success" onClick={() => saveTopic()}>
            Save
          </button>
        </div>
        <div className="col col-1">
          <button type="button" className="btn btn-danger"  onClick={() => navigate('./../')}>
            Cancel
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}
