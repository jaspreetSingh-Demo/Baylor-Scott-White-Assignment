import {BASE_URL} from './baseURL';

const fetchUsers = async () => {
  try {
    const response = await fetch(`${BASE_URL}/users`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching users list:', error);
    throw error;
  }
};

const fetchAlbumsByUserId = async userId => {
  try {
    const response = await fetch(`${BASE_URL}/albums?userId=${userId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching user by id:', error);
    throw error;
  }
};

const fetchAlbumsByAlbumId = async userId => {
  try {
    const response = await fetch(`${BASE_URL}/photos?albumId=${userId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching albums by id:', error);
    throw error;
  }
};

const fetchAlbums = async () => {
  try {
    const response = await fetch(`${BASE_URL}/photos`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching photos:', error);
    throw error;
  }
};

export {fetchUsers, fetchAlbumsByUserId, fetchAlbums, fetchAlbumsByAlbumId};
