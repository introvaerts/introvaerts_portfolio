import axios from 'axios';

const baseUrl = 'https://introvaerts.com/api/'

const Api = {
  getInfo: (subdomainName) => {
    return axios.get(`${baseUrl}subdomains/name/${subdomainName}`)
  },
  getImages: (galleryId) => {
    return axios.get(`${baseUrl}galleris/${galleryId}`)
  },
  testWithId: (subdomainId) => {
    return axios.get(`${baseUrl}subdomains/${subdomainId}`)
  },
  testWithGalleryId: (galleryId) => {
    return axios.get(`${baseUrl}galleries/${galleryId}`)
  }
}

export default Api;