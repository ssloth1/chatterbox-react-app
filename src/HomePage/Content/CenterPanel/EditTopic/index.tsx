import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchTopic, updateTopic } from "../../../../TopicPage/client";

export default function EditTopic({ displayAllTopics }: { displayAllTopics: any }) {
	const [title, setTitle] = useState("");
	const [desc, setDesc] = useState("");
	const [topic, setTopic] = useState<any>(undefined);
	const { tid } = useParams();
	const navigate = useNavigate();

	// Fetch topic data on component mount
	useEffect(() => {
		const fetchData = async () => {
			if (tid) {
				const fetchedTopic = await fetchTopic(tid);
				setTopic(fetchedTopic);
				setTitle(fetchedTopic.topicTitle);
				setDesc(fetchedTopic.topicDesc);
			}
		};
		fetchData();
	}, [tid]);

	const renewTopic = async () => {
		if (topic) {
			const updatedTopic = { ...topic, topicTitle: title, topicDesc: desc };
			await updateTopic(updatedTopic);
			navigate("./../../");
			displayAllTopics("");
		}
	};

	return (
		<div className="col-12 col-md-9 border border-1">
			<div className="mt-4 mx-5"><div className="row heading"><h1 className="text-muted">Edit Topic</h1></div><div className="row form"><form><div className="form-group mt-2"><label htmlFor="topicName">Topic Title:</label><input
				type="text"
				className="form-control mt-2"
				id="topicName"
				placeholder="Enter Title"
				value={title}
				onChange={(e) => setTitle(e.target.value)}
			/>
			</div><div className="form-group mt-2"><label htmlFor="topicDescription">Topic Description:</label><textarea
				className="form-control mt-2 mb-2"
				id="topicDescription"
				placeholder="Enter Description"
				rows={3}
				value={desc}
				onChange={(e) => setDesc(e.target.value)}
			></textarea></div></form></div><div className="row buttons mb-2"><div className="col col-1"><button type="button" className="btn btn-success" onClick={renewTopic}>
				Save
			</button></div><div className="col col-1"><button type="button" className="btn btn-danger" onClick={() => navigate("./../")}>
				Cancel
			</button></div></div></div></div>
	);
}