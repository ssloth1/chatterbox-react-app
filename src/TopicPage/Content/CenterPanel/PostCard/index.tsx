import {useState} from "react";
import DeleteModal from "../DeleteModal";
import { Link, useNavigate, useParams } from 'react-router-dom'; 
export default function PostCard({ post, fetchPosts }: { post: any, fetchPosts:any }) {
  const {tid} = useParams();
  const navigate = useNavigate();
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <div className="card w-100 border border-2 mt-3">
      <div className="card-body">
        <h5 className="card-title">{post.postTitle}</h5>
        <p className="card-text">{post.postDesc}</p>
        <Link
          to={`/Topics/${tid}/CenterPanel/${post._id}`}
          className="link-dark link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
        >
        <button type="button" className="btn btn-success mx-2">
          Go
        </button>
        </Link>
        <button type="button" className="btn btn-warning mx-1" onClick={()=>{
          navigate(`./../EditPost/${post._id}`);
        }} >
          Edit
        </button>
        <button type="button" className="btn btn-danger mx-2" onClick={() => setModalOpen(true)}>
          Delete
        </button>
      </div>
      <DeleteModal fetchPosts= {fetchPosts} postId={post._id} isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
