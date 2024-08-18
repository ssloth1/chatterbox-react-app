import { useState } from "react";
import DeleteModal from "../DeleteModal";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
//import { typeImplementation } from "@testing-library/user-event/dist/type/typeImplementation";
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
		<div className="card w-100 border border-2 mt-3">
			<div className="card-body">
				<h5 className="card-title">{topic.topicTitle}</h5>
				<p className="card-text">{topic.topicDesc}</p>
				<Link
					to={`/Topics/${topic._id}`}
					className="link-dark link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
				>
					<button type="button" className="btn btn-success mx-2">
						Go
					</button>
				</Link>
				<button
					type="button"
					className="btn btn-warning mx-1"
					onClick={() => {
						navigate(`./../EditTopic/${topic._id}`);
					}}
				>
					Edit
				</button>
				<button
					type="button"
					className="btn btn-danger mx-2"
					onClick={() => setModalOpen(true)}
				>
					Delete
				</button>
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