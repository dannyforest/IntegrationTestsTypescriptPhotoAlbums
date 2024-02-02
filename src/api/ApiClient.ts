import axios, {AxiosResponse} from 'axios';
import { Album } from '../models/Album';
import { Photo } from '../models/Photo';

export class ApiClient {
    private baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    /**
     * Retrieves the albums from the server.
     *
     * @return {Promise<Album[]>} A promise that resolves to an array of albums.
     * @throws {Error} If there was an error fetching the albums.
     */
    public async getAlbums(): Promise<Album[]> {
        try {
            const response = await axios.get<Album[]>(`${this.baseUrl}/albums`) as AxiosResponse<Album[]>;
            return response.data;
        } catch (error) {
            console.error('Error fetching albums:', error);
            throw error;
        }
    }

    /**
     * Retrieves photos from the API based on the albumId.
     * If the albumId is provided, retrieves photos from a specific album.
     * If the albumId is not provided, retrieves all photos.
     *
     * @param {number} albumId - The ID of the album to retrieve photos from. Optional.
     *
     * @return {Promise<Photo[]>} A promise that resolves to an array of photos.
     */
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
