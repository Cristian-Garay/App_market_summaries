import { apiUrl } from '../config';
import ax from 'axios';

export const axios = ax.create({
    baseURL: apiUrl
});