import axios, {AxiosResponse} from 'axios';
import { Album } from '../models/Album';
import { Photo } from '../models/Photo';

export class ApiClient {
    private baseUrl: string = "https://jsonplaceholder.typicode.com";

    constructor(baseUrl?: string) {
        if (baseUrl) {
            this.baseUrl = baseUrl;
        }
    }

    /**
     * Retrieves the albums from the server.
     *
     * @return {Promise<Album[]>} A promise that resolves to an array of albums.
     * @throws {Error} If there was an error fetching the albums.
     */
    public async getAlbums(): Promise<Album[]> {
        try {
            const response = await fetch(`${this.baseUrl}/albums`);
            if (!response.ok) {
                throw new Error(`Error fetching albums: ${response.status}`);
            }
            const albums = await response.json() as Album[];
            return albums;
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
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`Error fetching photos: ${response.status}`);
            }

            const photos = await response.json() as Photo[];
            return photos;
        } catch (error) {
            console.error('Error fetching photos:', error);
            throw error;
        }
    }
}
