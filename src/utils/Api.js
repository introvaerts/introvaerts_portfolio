import axios from 'axios';

const baseUrl = 'https://introvaerts.com/api/';
const secondUrl = 'http://localhost:4000/'

const Api = {
  getInfo: subdomainName => {
    return axios.get(`${baseUrl}subdomains/names/${subdomainName}`);
  },
  getGallery: galleryId => {
    return axios.get(`${baseUrl}galleries/${galleryId}`);
  },
  getGalleryByName: galleryName => {
    return axios.get(`${secondUrl}galleries/names/${galleryName}`);
  },
  getImage: imageId => {
    return axios.get(`${baseUrl}images/${imageId}`);
  },
};

export default Api;
