import React, { useState, useEffect } from "react";
import TopicCard from "./TopicCard";
export default function CenterPanel({topics}:{topics: any}) {
    console.log(topics);

  return (
    <div className="col-12 col-md-9 border border-1 ">
      <div className="mt-4 mx-5 ">
        <h1 className=".text-muted">Topics</h1>
        {topics.map((topic:any)=>{
            return <TopicCard key={topic._id} topic={topic}/>
        })}
      </div>
    </div>
  );
}
