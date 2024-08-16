import {useState} from "react";
import DeleteModal from "../DeleteModal";

export default function TopicCard({ topic }: { topic: any }) {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="card w-100 border border-2 mt-3">
      <div className="card-body">
        <h5 className="card-title">{topic.topicTitle}</h5>
        <p className="card-text">{topic.topicDesc}</p>
        <button type="button" className="btn btn-success mx-2">
          Go
        </button>
        <button type="button" className="btn btn-warning mx-1">
          Edit
        </button>
        <button type="button" className="btn btn-danger mx-2" onClick={() => setModalOpen(true)}>
          Delete
        </button>
      </div>
      <DeleteModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
