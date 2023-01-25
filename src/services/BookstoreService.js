import axios from 'axios';

const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';

const APP_ID = 'MrBrM9KhqI6ao1Os2Gnd';

const http = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const getAll = () => http.get(`/apps/${APP_ID}/books`);

const create = ({
  id, author, title, category,
}) => http.post(`/apps/${APP_ID}/books`, {
  item_id: id,
  author,
  title,
  category,
});

const remove = (id) => http.delete(`/apps/${APP_ID}/books/${id}`);

const BookStoreService = {
  getAll,
  create,
  remove,
};

export default BookStoreService;
