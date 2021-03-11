import axios from 'axios';

const baseUrl = 'https://introvaerts.com/api/';

const Api = {
  getInfo: subdomainName => {
    return axios.get(`${baseUrl}subdomains/names/${subdomainName}`);
  },
  getGallery: galleryId => {
    return axios.get(`${baseUrl}galleries/${galleryId}`);
  }
};

export default Api;
