import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { createTopic } from "../../../../TopicPage/client";
import { selectCurrentUser } from "../../../../Account/reducer";

export default function CreateTopic({ displayAllTopics }: { displayAllTopics: any }) {
	const navigate = useNavigate();
	const [title, setTitle] = useState("");
	const [desc, setDesc] = useState("");

	// Get currentUser from the Redux store
	const currentUser = useSelector(selectCurrentUser);

	const saveTopic = async () => {
		if (!currentUser) {
			alert("You must be logged in to create a topic!");
			return;
		}

		if (!title || !desc) {
			alert("Topic title and description are required!");
			return;
		}

		try {
			// Log the fields for debugging
			console.log("Title:", title);
			console.log("Description:", desc);
			console.log("Creator (User ID):", currentUser._id);

			// Send the payload with the correct field names
			await createTopic({
				topicTitle: title,          // Match the 'topicTitle' field in our schema
				topicDesc: desc,            // Match the 'topicDesc' field in our schema
				creator: currentUser._id    // Match the 'creator' field in your schema
			});

			displayAllTopics('');
			navigate('./../');
		} catch (error) {
			console.error("Failed to create topic:", error);
			alert("There was an error creating the topic. Please try again.");
		}
	};

	return (
		<div className="col-12 col-md-9 border border-1">
			<div className="mt-4 mx-5">
				<div className="row heading">
					<h1 className="text-muted">Create Topic</h1>
				</div>
				<div className="row form">
					<form>
						<div className="form-group mt-2">
							<label htmlFor="topicTitle">Topic Title:</label>
							<input
								type="text"
								className="form-control mt-2"
								id="topicTitle"
								placeholder="Enter Title"
								value={title}
								onChange={(e) => setTitle(e.target.value)}
							/>
						</div>
						<div className="form-group mt-2">
							<label htmlFor="topicDesc">Topic Description:</label>
							<textarea
								className="form-control mt-2 mb-2"
								id="topicDesc"
								placeholder="Enter Description"
								rows={3}
								value={desc}
								onChange={(e) => setDesc(e.target.value)}
							></textarea>
						</div>
					</form>
				</div>
				<div className="row buttons mb-2">
					<div className="col col-1">
						<button type="button" className="btn btn-success" onClick={saveTopic}>
							Save
						</button>
					</div>
					<div className="col col-1">
						<button type="button" className="btn btn-danger" onClick={() => navigate('./../')}>
							Cancel
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
