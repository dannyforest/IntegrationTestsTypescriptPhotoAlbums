import axios, {AxiosResponse} from 'axios';
import { Album } from '../models/Album';
import { Photo } from '../models/Photo';

export class ApiClient {
    private baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    public async getAlbums(): Promise<Album[]> {
        try {
            const response = await axios.get<Album[]>(`${this.baseUrl}/albums`) as AxiosResponse<Album[]>;
            return response.data;
        } catch (error) {
            console.error('Error fetching albums:', error);
            throw error;
        }
    }

    public async getPhotos(albumId?: number): Promise<Photo[]> {
        try {
            const url = albumId ? `${this.baseUrl}/albums/${albumId}/photos` : `${this.baseUrl}/photos`;
            const response = await axios.get<Photo[]>(url) as AxiosResponse<Photo[]>;
            return response.data;
        } catch (error) {
            console.error('Error fetching photos:', error);
            throw error;
        }
    }
}
