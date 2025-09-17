import axios from 'axios';
import { UserProfile, UpdateProfileRequest } from '../types/profile';
import { Todo, CreateTodoInput, UpdateTodoInput } from '../types/todo';

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

export async function getTodos(): Promise<Todo[]> {
  try {
    const response = await axios.get(`${API_BASE_URL}/todos`);
    return response.data;
  } catch (error) {
    console.error('Error fetching todos:', error);
    throw error;
  }
}

export async function createTodo(input: CreateTodoInput): Promise<Todo> {
  try {
    const response = await axios.post(`${API_BASE_URL}/todos`, input);
    return response.data;
  } catch (error) {
    console.error('Error creating todo:', error);
    throw error;
  }
}

export async function updateTodo(id: string, input: UpdateTodoInput): Promise<Todo> {
  try {
    const response = await axios.put(`${API_BASE_URL}/todos/${id}`, input);
    return response.data;
  } catch (error) {
    console.error('Error updating todo:', error);
    throw error;
  }
}

export async function deleteTodoApi(id: string): Promise<void> {
  try {
    await axios.delete(`${API_BASE_URL}/todos/${id}`);
  } catch (error) {
    console.error('Error deleting todo:', error);
    throw error;
  }
}