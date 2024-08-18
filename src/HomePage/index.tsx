import { useState, useEffect } from "react";
//import { Link } from "react-router-dom";
import * as client from "../TopicPage/client";
import "./styles.css";
import NavBar from "./NavBar";
import Content from "./Content";

export default function HomePage() {
  const [topics, setTopics] = useState<any[]>([]);
  const [searchText, setSearchText] = useState<string>("");

  const displayAllTopics = async (searchText: string) => {
    const topics = await client.fetchAllTopics(searchText);
    setTopics(topics);
  }

  useEffect(() => {
    displayAllTopics(searchText);
  }, []);

  return (
    <>
      <NavBar searchText={searchText}
        setSearchText={setSearchText}
        displayAllTopics={displayAllTopics} />
      <Content topics={topics} displayAllTopics={displayAllTopics} />

      {/* <div>
      <div className="row home-page-row">
        <div className="col col-6">
          <div className="col border-rounded search-container">
            <input className="border-0 full-width" placeholder="Search" />
          </div>
        </div>
        <div className="col col-6">
          <div className="col button-container">
            <button className="btn btn-lg btn-danger me-1 float-end full-width">
              Profile
            </button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-3 left-col">
          <div className="create-topic-button-container">
            <button
              className="btn btn-lg btn-danger me-1 float-end full-width"
              onClick={addNewTopic}
            >
              Create Topic
            </button>
          </div>
        </div>
        <div className="col-9 center-col">
          <div className="content-container">
            <h1>Topics</h1>
            {topics.map((topic, index) => (
							<div key={index} className="topic-details">
								<Link
									to={`/${topic._id}`}
									className="link-dark link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
								>
									<h5>{topic.topicTitle}</h5>
									<p>{topic.topicDesc}</p>
								</Link>
							</div>
						))}
          </div>
        </div>
        <div className="col-3"></div>
      </div>
    </div> */}

    </>
  );
}