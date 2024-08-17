import React, { useState, useEffect } from "react";
import LeftSideBar from "./LeftSideBar";
import CenterPanel from "./CenterPanel";
import CreateTopic from "./CenterPanel/CreateTopic";
import EditTopic from "./CenterPanel/EditTopic";
import { Route, Routes , Navigate} from "react-router-dom";

export default function Content({ topics, displayAllTopics }: { topics: any , displayAllTopics: any}) {
  return (
    <div className="row">
      <LeftSideBar/>
      <Routes>
        <Route path="/" element={<Navigate to="CenterPanel" />} />
        <Route path="/CenterPanel" element={<CenterPanel topics={topics} displayAllTopics={displayAllTopics} />} />
        <Route path="/CreateTopic" element={<CreateTopic displayAllTopics={displayAllTopics} />} />
        <Route path="/EditTopic/:tid" element={<EditTopic  displayAllTopics={displayAllTopics} />} />
     </Routes>
    </div>
  );
}
