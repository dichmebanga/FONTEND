import axios from 'axios';
import { API_URL } from './apiClient';

export const axiosInstance = axios.create({
    baseURL: API_URL,
});
