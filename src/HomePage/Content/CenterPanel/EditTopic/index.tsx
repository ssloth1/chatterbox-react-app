import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchTopic, updateTopic } from "../../../../TopicPage/client";

export default function EditTopic({ displayAllTopics }: { displayAllTopics: any }) {
	const [title, setTitle] = useState("");
	const [desc, setDesc] = useState("");
	const [topic, setTopic] = useState<any>(undefined);
	const { tid } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		if (tid) {
			fetchTopic(tid).then(fetchedTopic => {
				setTopic(fetchedTopic);
				setTitle(fetchedTopic.topicTitle);
				setDesc(fetchedTopic.topicDesc);
			});
		}
	}, [tid]);

	const renewTopic = async () => {
		if (topic) {
			await updateTopic({ ...topic, topicTitle: title, topicDesc: desc });
			navigate("./../../");
			displayAllTopics("");
		}
	};

	return (
		<div className="col-12 col-md-9 border border-1 p-4">
			<h1 className="text-muted mb-4">Edit Topic</h1>
			<form>
				<div className="form-group mb-3">
					<label htmlFor="topicName">Topic Title:</label>
					<input
						type="text"
						className="form-control mt-2"
						id="topicName"
						placeholder="Enter Title"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
				</div>
				<div className="form-group mb-4">
					<label htmlFor="topicDescription">Topic Description:</label>
					<textarea
						className="form-control mt-2"
						id="topicDescription"
						placeholder="Enter Description"
						rows={3}
						value={desc}
						onChange={(e) => setDesc(e.target.value)}
					></textarea>
				</div>
				<div className="d-flex gap-3">
					<button type="button" className="btn btn-success" onClick={renewTopic}>
						Save
					</button>
					<button type="button" className="btn btn-danger" onClick={() => navigate("./../")}>
						Cancel
					</button>
				</div>
			</form>
		</div>
	);
}
