import axios from 'axios';

const baseUrl = 'https://introvaerts.com/api/';
const secondUrl = 'http://localhost:4000/'

const Api = {
  getInfo: subdomainName => {
    return axios.get(`${secondUrl}subdomains/names/${subdomainName}`);
  },
  getGallery: galleryId => {
    return axios.get(`${secondUrl}galleries/${galleryId}`);
  },
  getGalleryByName: galleryName => {
    return axios.get(`${secondUrl}galleries/names/${galleryName}`);
  },
  getImage: imageId => {
    return axios.get(`${secondUrl}images/${imageId}`);
  },
};

export default Api;
