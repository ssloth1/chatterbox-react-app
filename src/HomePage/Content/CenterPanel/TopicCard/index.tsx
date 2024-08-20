import { useState } from "react";
import DeleteModal from "../DeleteModal";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";

export default function TopicCard({
	topic,
	displayAllTopics,
}: {
	topic: any;
	displayAllTopics: any;
}) {
	const navigate = useNavigate();
	const [isModalOpen, setModalOpen] = useState(false);

	return (
		<div className="topic-card">
			<div className="topic-card-body">
				<h5 className="topic-card-title">{topic.topicTitle}</h5>
				<p className="topic-card-text">{topic.topicDesc}</p>
				<div className="card-buttons">
					<Link to={`/Topics/${topic._id}`}>
						<button type="button" className="card-btn card-btn-go">
							Go
						</button>
					</Link>
					<button
						type="button"
						className="card-btn card-btn-edit"
						onClick={() => {
							navigate(`./../EditTopic/${topic._id}`);
						}}
					>
						Edit
					</button>
					<button
						type="button"
						className="card-btn card-btn-delete"
						onClick={() => setModalOpen(true)}
					>
						Delete
					</button>
				</div>
			</div>
			<DeleteModal
				displayAllTopics={displayAllTopics}
				topicId={topic._id}
				isOpen={isModalOpen}
				onClose={() => setModalOpen(false)}
			/>
		</div>
	);
}
