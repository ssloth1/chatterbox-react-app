import axios from "axios";
// const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const REMOTE_SERVER = "http://localhost:4000"
const TOPICS_API = `${REMOTE_SERVER}/api/topics`;
export const fetchAllTopics = async (searchText = '') => {
    // Construct the URL with a query string for searchText if it's not empty
    const url = `${TOPICS_API}?searchText=${encodeURIComponent(searchText)}`;
    try {
      console.log(url);
      const { data } = await axios.get(url);
      console.log(data);
      return data;
    } catch (error) {
      console.log('Error fetching topics:', error);
      // Optionally handle errors differently or re-throw them
      throw error;
    }
};


export const createTopic = async (topic: any) => {
const response = await axios.post(TOPICS_API, topic);
return response.data;
};
export const deleteTopic = async (id: string) => {
  
const response = await axios.delete(`${TOPICS_API}/${id}`);
return response.data;
};
export const updateTopic = async (topic: any) => {
const response = await axios.put(`${TOPICS_API}/${topic._id}`, topic);
return response.data;
};
export const fetchTopic = async(id: string)=>{
const response = await axios.get(`${TOPICS_API}/${id}`);
return response.data;
}