import axios from 'axios';

const BASE_URL = 'http://localhost:8000/projects/';

// Function to fetch all document types
export const fetchTemplateTypes = async () => {
    const token = localStorage.getItem('refresh_token');
  
    // Check if token exists
    if (!token) {
      // throw new Error('No authentication token found');
      window.location.replace('/login');
    }
  
    try {
      const response = await axios.get(`${BASE_URL}template-types/`, {
        headers: {
          'Authorization': "JWT " + localStorage.getItem('access_token'),
          'Content-Type': 'application/json',
          'accept': 'application/json'
          },  withCredentials: true
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching document types:', error);
      throw error;
    }
  };

export const fetchDocumentTypes = async () => {
    const token = localStorage.getItem('refresh_token');
  
    // Check if token exists
    if (!token) {
      // throw new Error('No authentication token found');
      window.location.replace('/login');
    }
  
    try {
      const response = await axios.get(`${BASE_URL}projects/documents`, {
        headers: {
          'Authorization': "JWT " + localStorage.getItem('access_token'),
          'Content-Type': 'application/json',
          'accept': 'application/json'
          },  withCredentials: true
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching document types:', error);
      throw error;
    }
  };