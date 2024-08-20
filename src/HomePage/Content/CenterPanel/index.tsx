import TopicCard from "./TopicCard";
import { AnyARecord } from "dns";
export default function CenterPanel({ topics, displayAllTopics }: { topics: any, displayAllTopics: AnyARecord }) {

	return (
		<div className="col-12 col-md-9 border border-1 ">
			<div className="mt-4 mx-5 ">
				<h1 className=".text-muted">Topics</h1>
				{topics.map((topic: any) => {
					return <TopicCard key={topic._id} topic={topic} displayAllTopics={displayAllTopics} />

				})}
			</div>
		</div>
	);
}