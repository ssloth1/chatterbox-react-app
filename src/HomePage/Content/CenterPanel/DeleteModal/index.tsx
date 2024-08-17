
import { deleteTopic} from "../../../../TopicPage/client";
export default function DeleteModal({
    displayAllTopics,
    isOpen,
    onClose,
    topicId,
  }: {
    displayAllTopics : any;
    isOpen: boolean;
    onClose: any;
    topicId: any
  }) {
    if (!isOpen) return null;
    const removeTopic = () =>{
      deleteTopic(topicId)
    }
    return (
      <div
        className="modal show"
        style={{ display: "block" }}
        tabIndex={-1}
        role="dialog"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Delete Topic?</h5>
            </div>
            <div className="modal-body">
              <p>Are you sure you want to delete this topic?</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
                onClick={onClose}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => {
                  // Add delete logic here
                  removeTopic();
                  displayAllTopics('');
                  onClose(); // Close modal after action
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  