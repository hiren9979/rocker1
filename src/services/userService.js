import axiosInstance from './axios';

export const userService = {
  async getCurrentUser() {
    try {
      const response = await axiosInstance.get('/user');
      return response.data;
    } catch (error) {
      throw error.response?.data || 'Failed to fetch user data';
    }
  }
};
