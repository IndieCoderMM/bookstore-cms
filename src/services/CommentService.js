import axios from 'axios';

const BASE_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps';
const APP_ID = 'Vl3bfy4qmazRTK1UTdCH';

const http = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const post = ({ id, username, comment }) => {
  http.post(`/${APP_ID}/comments`, { item_id: id, username, comment });
};

const get = (id) => http.get(`/${APP_ID}/comments?item_id=${id}`);

const CommentService = {
  get,
  post,
};

export default CommentService;
