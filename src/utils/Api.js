import axios from 'axios';

const baseUrl = 'https://introvaerts.com/api/';

const Api = {
  getInfo: subdomainName => {
    return axios.get(`${baseUrl}subdomains/names/${subdomainName}`);
  },
  getGallery: galleryId => {
    return axios.get(`${baseUrl}galleries/${galleryId}`);
  },
  getImage: imageId => {
    return axios.get(`${baseUrl}images/${imageId}`);
  },
};

export default Api;
