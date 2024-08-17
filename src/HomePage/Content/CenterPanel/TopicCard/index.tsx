import React from "react";

export default function TopicCard({topic}:{topic: any}) {
  return (
    <div className="card w-100 border border-2 mt-3">
      <div className="card-body">
        <h5 className="card-title">{topic.topicTitle}</h5>
        <p className="card-text">
          {topic.topicDesc}
        </p>
        <a href="#" className="btn btn-success">
          Go
        </a>
      </div>
    </div>
  );
}
