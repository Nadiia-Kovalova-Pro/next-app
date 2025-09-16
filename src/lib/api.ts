import axios from 'axios';
import { UserProfile, UpdateProfileRequest } from '../types/profile';

const API_BASE_URL = '/api'; // Adjust if needed

export async function fetchUserProfile(userId: string): Promise<UserProfile> {
  try {
    const response = await axios.get(`${API_BASE_URL}/users/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user profile:', error);
    throw error;
  }
}

export async function updateUserProfile(userId: string, data: UpdateProfileRequest): Promise<UserProfile> {
  try {
    const response = await axios.put(`${API_BASE_URL}/users/${userId}`, data);
    return response.data;
  } catch (error) {
    console.error('Error updating user profile:', error);
    throw error;
  }
}