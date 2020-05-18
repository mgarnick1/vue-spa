import axios from 'axios';

axios.defaults.baseURL = 'https://api.fullstackweekly.com';

const appService = {
  getPosts(categoryId) {
    return new Promise((resolve) => {
      axios.get(`/wp-json/wp/v2/posts?categories=${categoryId}&per_page=6`).then((res) => {
        resolve(res.data);
      });
    });
  },
  login(credentials) {
    return new Promise((resolve, reject) => {
      axios
        .post('/services/auth.php', credentials)
        .then((res) => {
          resolve(res.data);
        })
        .catch((res) => {
          reject(res.status);
        });
    });
  },
  getProfile() {
    return new Promise((resolve) => {
      axios
        .get('/services/profile.php', {
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem('token')}`,
          },
        })
        .then((res) => {
          resolve(res.data);
        });
    });
  },
};

export default appService;
