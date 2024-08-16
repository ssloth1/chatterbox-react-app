import React, { useState, useEffect } from "react";
import LeftSideBar from "./LeftSideBar";
import CenterPanel from "./CenterPanel";
export default function Content({topics}:{topics: any}) {
  return (
    <div className="row">
      <LeftSideBar />
      <CenterPanel topics ={topics} />
    </div>
  );
}
