import React, { useState, useEffect } from "react";
import LeftSideBar from "./LeftSideBar";
import CenterPanel from "./CenterPanel";
import CreateTopic from "./CenterPanel/CreateTopic";
import EditTopic from "./CenterPanel/EditTopic";
export default function Content({ topics }: { topics: any }) {
  return (
    <div className="row">
      <LeftSideBar />
      <CenterPanel topics ={topics} />
      {/* <CreateTopic/> */}
      {/* <EditTopic /> */}
    </div>
  );
}
